import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
console.log(listImages);
gallery.innerHTML = listImages;

// getting the li and link arrays by class css selector
// const galleryItem = document.querySelectorAll(".gallery__item");
// console.log(galleryItem);
const link = document.querySelectorAll(".gallery__link");
console.log(link);

for (let index = 0; index < link.length; index++) {
  const element = link[index];
  element.addEventListener("click", (e) => {
    // preventing link to engage
    e.preventDefault();

    // changing image src value on click event
    const elementImage = element.querySelector("img");
    console.log(elementImage);

    const elementImageAttribute = elementImage.getAttribute([`data-source`]);
    elementImage.src = elementImageAttribute;
    console.log(elementImage);

    // creating the modal window with te html image inside using basicLightbox library
    const instance = basicLightbox.create(
      `<img class="gallery__image" src="${elementImage.src}" alt="${elementImage.alt}">`
    );
    instance.show();

    // setting the "Esc" key to close the modal window
    document.addEventListener("keyup", (ev) => {
      if (ev.key === "Escape") {
        instance.close();
      }
      return;
    });
  });
}
