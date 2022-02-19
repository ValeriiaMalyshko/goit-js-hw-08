// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const imgEl = document.querySelector("div.gallery");
const imgMarkup = createImgCard(galleryItems);

imgEl.insertAdjacentHTML("beforeend", imgMarkup);


function createImgCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt= "${description}" />
</a>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox('.gallery a', { 
  captions : true,
  captionsData : 'alt',
  captionDelay : 250,
 });