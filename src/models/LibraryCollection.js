import LibraryItem from "./LibraryItem";

export default function LibraryCollection() {
  this.items = [];

  this.addItem = function (item) {
    this.items.push(new LibraryItem((item)));
    return this;
  }

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
    return this;
  }
}
