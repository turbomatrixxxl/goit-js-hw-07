import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// setting arrays for gallery attributes
const imagesPreview = [];
const imagesOriginal = [];
const imagesDescription = [];
const listImages = [];

// getting the arrays contents and setting the html array  with the other array content
for (let i = 0; i < galleryItems.length; i++) {
  const element = galleryItems[i];
  imagesPreview.push(galleryItems[i].preview);
  imagesOriginal.push(galleryItems[i].original);
  imagesDescription.push(galleryItems[i].description);
  const image = `<li class="gallery__item"><a class="gallery__link" href="${imagesOriginal[i]}"><img class="gallery__image" data-source="${imagesOriginal[i]}" src="${imagesPreview[i]}" alt="${imagesDescription[i]}"></a></li>`;
  listImages.push(image);
}

// putting the html array in html on broser page
gallery.innerHTML = listImages;

// getting the gallery"link" array by class css selector
const link = document.querySelectorAll(".gallery__link");

// getting each link and adding click event on each link
link.forEach((element) => {
  element.addEventListener("click", (ev) => {
    //   preventing link natural action
    ev.preventDefault();
    const elementImage = element.querySelector("img");

    // changing the src image path on click event
    elementImage.src = element.href;

    // setting the modal window gallery using the SimpleLightbox library and adding "alt" caption title on bottom with 250 ms delay
    let gallery = new SimpleLightbox(`.gallery a`, {
      captionsData: "alt",
      captionDelay: 250,
    });
  });
});
