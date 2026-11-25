const imageZoom = document.getElementById("imageZoom");
const zoomedImage = imageZoom.querySelector("img");

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-image-zoom]");
  if (trigger) {
    const source = trigger.querySelector("img");
    const url = source.currentSrc || source.getAttribute("src");
    if (!url) return;
    zoomedImage.src = url;
    zoomedImage.alt = source.alt;
    imageZoom.showModal();
  } else if (event.target === imageZoom || event.target.closest("[data-close-image-zoom]")) {
    imageZoom.close();
  }
});
