import LibraryItem from "./LibraryItem";
import {v4 as uuidv4} from 'uuid';

export default function LibraryCollection() {
  this.items = [];

  this.addItem = function (item) {
    this.items.push(new LibraryItem(item, uuidv4()));
    return this;
  }

  this.removeItem = function(item) {
    let i = this.items.find(obj => {
      return obj.uuid === item.uuid;
    });
    if(i) this.items.splice(this.items.indexOf(i), 1);
    return this;
  }
}
