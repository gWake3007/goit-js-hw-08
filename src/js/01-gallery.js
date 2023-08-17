// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";   
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (element) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${element.original}>
        <img
          class="gallery__image"
          src=${element.preview}
          alt=${element.description}
        />
      </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
