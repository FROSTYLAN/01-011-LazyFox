let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

const loadImage = (intersectionEntry) => {
  const imgNode = intersectionEntry.target;
  imgNode.src = imgNode.dataset.src;
  imgNode.onload = () => {
    loadedImages += 1;
    logState();
  };
  observer.unobserve(imgNode);
};

export const registerImage = (imagen) => {
  observer.observe(imagen);
  totalImages += 1;
  logState();
};

function logState() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}

// export const deregisterImages = () => {
//   // Detener la observación de los elementos y eliminarlos del observer
//   observer.disconnect(); // Detener la observación
//   observer.disconnect(); // Eliminar los elementos observados
// };
