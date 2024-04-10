import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesPreview = [];
const imagesOriginal = [];
const imagesDescription = [];
const listImages = [];

for (let i = 0; i < galleryItems.length; i++) {
  const element = galleryItems[i];
  imagesPreview.push(galleryItems[i].preview);
  imagesOriginal.push(galleryItems[i].original);
  imagesDescription.push(galleryItems[i].description);
  const image = `<li class="gallery__item"><a class="gallery__link" href="${imagesOriginal[i]}"><img class="gallery__image" data-source="${imagesOriginal[i]}" src="${imagesPreview[i]}" alt="${imagesDescription[i]}"></a></li>`;
  listImages.push(image);
  //   return listImages;
}

console.log(listImages);
gallery.innerHTML = listImages;

// const galleryItem = document.querySelectorAll(".gallery__item");
// console.log(galleryItem);
const link = document.querySelectorAll(".gallery__link");
console.log(link);

for (let index = 0; index < link.length; index++) {
  const element = link[index];
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const elementImage = element.querySelector("img");
    console.log(elementImage);

    const elementImageAttribute = elementImage.getAttribute([`data-source`]);
    elementImage.src = elementImageAttribute;
    console.log(elementImage);

    const instance = basicLightbox.create(
      `<img class="gallery__image" src="${elementImage.src}" alt="${elementImage.alt}">`
    );
    instance.show();

    document.addEventListener("keyup", (ev) => {
      if (ev.key === "Escape") {
        instance.close();
      }
      return;
    });
  });
}
