const isIntersecting = (entry) => {
  return entry.isIntersecting; // True -> dentro de la pantalla
};

const accion = (entry) => {
  const container = entry.target; // container - div
  const imagen = container.firstChild;
  const url = imagen.dataset.src;

  // Cargue la imagen
  imagen.src = url;

  // Cuando ya cargó la imagen desregistra.
  observer.unobserve(container);
};

// Entries -> Todos los elemento que está observando.
const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};

export const desregisterImages = () => {
  // Detener la observación de los elementos y eliminarlos del observer
  observer.disconnect(); // Detener la observación
  observer.disconnect(); // Eliminar los elementos observados
};
