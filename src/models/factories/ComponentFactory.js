import BookCard from "components/book/BookCard.vue";

function ComponentFactory(type) {
  this.types = {
    "Book": BookCard,
    "Movie": null,
  };
}
