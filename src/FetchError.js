export class FetchError extends Error {
  constructor(status, statusText, error = null) {
    super('Fetch error');

    this.data = error;
    this.status = status;
    this.statusText = statusText;
  };
}
