import jwksRsa from "jwks-rsa";

import jwksRsa from "jwks-rsa";

jest.mock("jwks-rsa", () => {
  const originalModule = jest.requireActual("jwks-rsa");
  return {
    ...originalModule,
    __esModule: true, // This is necessary for ES Modules compatibility
    default: jest.fn().mockImplementation(() => {
      return {
        ...originalModule.default(),
        getSigningKey: jest.fn(),
      };
    }),
  };
});

describe("Your test suite", () => {
  beforeEach(() => {
    // Reset and redefine the mock for each test
    (jwksRsa().getSigningKey as jest.Mock).mockReset();
  });

  it("should test getSigningKey behavior", () => {
    const mockJwksClient = jwksRsa();
    (mockJwksClient.getSigningKey as jest.Mock).mockImplementation((kid: string, callback: Function) => {
      callback(null, { publicKey: "mockedPublicKey" });
    });

    // Rest of your test
  });

  // Other tests...
});
