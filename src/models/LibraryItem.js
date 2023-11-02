export default function LibraryItem(media, uuid=-1){
  this.uuid = uuid;
  this.media = media;

  this.favorite = false;

  this.isFavorite = () => {
    return this.favorite;
  }
}
