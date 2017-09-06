class AppError {
  constructor(private message: string, private code: number) {}
  public getCode() {
    return this.code;
  }
  public getMessage() {
    return this.message;
  }
}

Promise.resolve()
  .then(async () => {
    return Promise.reject(new AppError('only post method allowed', 405));
  })
  .catch((error: Error | AppError) => {
    if (error instanceof AppError) {
      console.log(error.getCode(), error.getMessage());
    }
  });
