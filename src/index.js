import { registerImage, desregisterImages } from "./lazy";

const min = 1;
const max = 122;
const random = () => Math.floor(Math.random() * (max - min) + min);

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto bg-gray-200 rounded-xl";
  imagen.width = "320";
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);

  return container;
};

const mountNode = document.getElementById("images");
const addButton = document.querySelector(".add-btn");
const cleanButton = document.querySelector(".clean-btn");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage);
};

const cleanImages = () => {
  mountNode.innerHTML = "";
  desregisterImages();
};

addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanImages);
