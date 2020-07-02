export class NestedError<T extends Error> extends Error {
  public nestedError: T;

  constructor(error: T, message?: string) {
    super(message || error.message);
    this.nestedError = error;
  }
}
