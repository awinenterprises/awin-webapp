const imageZoom = document.getElementById("imageZoom");
const zoomedImage = imageZoom.querySelector("img");
let pendingFullImage;

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-image-zoom]");
  if (trigger) {
    const source = trigger.querySelector("img");
    const url = source.currentSrc || source.getAttribute("src");
    if (!url) return;
    zoomedImage.src = url;
    zoomedImage.alt = source.alt;
    imageZoom.showModal();
    pendingFullImage = null;
    const original = source.dataset.fullImage;
    if (original && new URL(original, document.baseURI).href !== zoomedImage.src) {
      const candidate = new Image();
      pendingFullImage = candidate;
      candidate.onload = () => {
        if (imageZoom.open && pendingFullImage === candidate) zoomedImage.src = candidate.src;
      };
      candidate.src = original;
    }
  } else if (event.target === imageZoom || event.target.closest("[data-close-image-zoom]")) {
    imageZoom.close();
  }
});
