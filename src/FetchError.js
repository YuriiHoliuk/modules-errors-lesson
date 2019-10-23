export class FetchError extends Error {
  constructor(response) {
    super('Fetch Error');

    this.status = response.status;
    this.statusText = response.statusText;
  }
}
