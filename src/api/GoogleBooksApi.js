export default class GoogleBooksApi {
  static API_KEY = "AIzaSyCmTMIJ06qQ_q38lrLv1AhK7eOtiRIzIxY";
  static BASE = "https://www.googleapis.com/books/v1/volumes";
  static KEYWORDS = {
    "intitle": "Title",
    "inauthor": "Author",
    "inpublisher": "Publisher",
    "subject": "Description",
    "isbn": "(ISBN) International Standard Book Number",
    "lccn": "(LCCN) Library of Congress Control Number",
    "oclc": "(OCLC) Online Computer Library Center",
  };

  async getBooks(keyword, query) {
    let url = this.constructURL(keyword, query);
    const res = await fetch(url);
    return await res.json();
  }
  constructURL(keyword, query) {
    return `${BookApi.BASE}?q=${keyword}:${query}&key=${BookApi.API_KEY}`;
  }
}

// intitle: Returns results where the text following this keyword is found in the title.
//   inauthor: Returns results where the text following this keyword is found in the author.
//   inpublisher: Returns results where the text following this keyword is found in the publisher.
//   subject: Returns results where the text following this keyword is listed in the category list of the volume.
//   isbn: Returns results where the text following this keyword is the ISBN number.
//   lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
//   oclc: Returns results where the text following this keyword is the Online Computer Library Center number.
//
