export default function LibraryItem(media){
  this.media = media;

  this.favorite = false;

  this.isFavorite = () => {
    return this.favorite;
  }
}
