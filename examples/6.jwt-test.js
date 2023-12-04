const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const { verifyJWT } = require("./path-to-your-verifyJWT-function"); // Adjust the path as necessary

jest.mock("jsonwebtoken");
jest.mock("jwks-rsa");

describe("verifyJWT Function Tests", () => {
  let mockRequest;
  let mockReply;
  let replySend;

  beforeEach(() => {
    // Set up mocks for each test
    jwt.verify.mockReset();
    jwksClient.mockReset();
    replySend = jest.fn();
    mockReply = {
      code: jest.fn().mockReturnThis(),
      send: replySend,
    };
  });

  test("Accessing protected route without a token should return 401", async () => {
    mockRequest = { headers: {} };

    await verifyJWT(mockRequest, mockReply);
    expect(mockReply.code).toHaveBeenCalledWith(401);
    expect(replySend).toHaveBeenCalledWith({ error: "No token provided" });
  });

  test("Accessing protected route with an invalid token format should return 400", async () => {
    mockRequest = { headers: { authorization: "InvalidTokenFormat" } };

    await verifyJWT(mockRequest, mockReply);
    expect(mockReply.code).toHaveBeenCalledWith(400);
    expect(replySend).toHaveBeenCalledWith({ error: "Invalid token format" });
  });

  test("Accessing protected route with a token having an incorrect signature should return 401", async () => {
    const invalidSignatureToken = "tokenWithInvalidSignature";
    mockRequest = { headers: { authorization: `Bearer ${invalidSignatureToken}` } };
    jwt.verify.mockImplementation(() => {
      throw new jwt.JsonWebTokenError("invalid signature");
    });

    await verifyJWT(mockRequest, mockReply);
    expect(mockReply.code).toHaveBeenCalledWith(401);
    expect(replySend).toHaveBeenCalledWith({ error: "Invalid token" });
  });

  test("Accessing protected route with network errors when fetching the signing key should return 500", async () => {
    const validToken = "validToken";
    mockRequest = { headers: { authorization: `Bearer ${validToken}` } };
    jwksClient.getSigningKey.mockImplementation(() => {
      throw new Error("Network error");
    });

    await verifyJWT(mockRequest, mockReply);
    expect(mockReply.code).toHaveBeenCalledWith(500);
    expect(replySend).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });

  test("verifyJWT with invalid 'kid' in JWT should handle the error", async () => {
    const tokenWithInvalidKid = "tokenWithInvalidKid";
    mockRequest = { headers: { authorization: `Bearer ${tokenWithInvalidKid}` } };
    
    // Mock the jwt.decode to return a token with an invalid 'kid'
    jwt.decode.mockReturnValue({
        header: { kid: 'invalidKid' },
        payload: {}
    });

    // Assuming your implementation calls getSigningKey and handles the error
    jwksClient.getSigningKey.mockImplementation(() => { throw new Error('Invalid kid') });

    await verifyJWT(mockRequest, mockReply);
    expect(mockReply.code).toHaveBeenCalledWith(/* appropriate error code */);
    expect(replySend).toHaveBeenCalledWith({ error: /* appropriate error message */ });
});

test("verifyJWT with a token decode error should handle the error", async () => {
    const malformedToken = "malformedToken";
    mockRequest = { headers: { authorization: `Bearer ${malformedToken}` } };
    
    // Mock jwt.decode to throw an error for a malformed token
    jwt.decode.mockImplementation(() => { throw new Error('Token decode error') });

    await verifyJWT(mockRequest, mockReply);
    expect(mockReply.code).toHaveBeenCalledWith(/* appropriate error code */);
    expect(replySend).toHaveBeenCalledWith({ error: /* appropriate error message */ });
});
  // Other tests, if necessary
});
