describe("startTokenRefresh", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(tokenUtils, "fetchTokenWithRetries").mockImplementation(() => {
      return Promise.resolve();
    });
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  it("should immediately call fetchTokenWithRetries", async () => {
    const type = "sampleType";
    const url = "http://example.com";

    await tokenUtils.startTokenRefresh(type, url);

    expect(tokenUtils.fetchTokenWithRetries).toHaveBeenCalledWith(type, url);
  });

  it("should schedule fetchTokenWithRetries at correct intervals", async () => {
    const type = "sampleType";
    const url = "http://example.com";

    await tokenUtils.startTokenRefresh(type, url);

    jest.advanceTimersByTime(12 * 60 * 1000);

    expect(tokenUtils.fetchTokenWithRetries).toHaveBeenCalledTimes(2);
  });
});
