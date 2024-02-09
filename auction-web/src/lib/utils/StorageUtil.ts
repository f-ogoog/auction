class StorageUtil {
  setToken(accessToken: string) {
    if (!process.browser) {
      return;
    }

    localStorage.setItem("ACCESS_TOKEN", accessToken);
  }
}

export default new StorageUtil();
