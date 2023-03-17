const isIntersecting = (entry) => {
  return entry.isIntersecting; // True -> dentro de la pantalla
};

const accion = (entry) => {
  const nodo = entry.target;
  console.log("que fue manito");

  // Cuando ya cargó la imagen desregistra.
  observer.unobserve(nodo);
};

// Entries -> Todos los elemento que está observando.
const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
