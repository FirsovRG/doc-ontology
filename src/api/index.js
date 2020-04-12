const urlBase = "http://localhost:8080";

export class Api {
  async getAllDocuments() {
    const data = await fetch(urlBase + "/documents");
    const response = await data.json();
    // console.log(response);
    return response;
  }
}
