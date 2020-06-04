const urlBase = "http://localhost:8080";

export class Api {
  async getAllDocuments() {
    const data = await fetch(urlBase + "/documents");
    const response = await data.json();
    return response;
  }
}
