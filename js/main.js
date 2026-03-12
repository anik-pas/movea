const modalWindow = document.querySelector(".modal");
const buttonsModal = document.querySelectorAll(".button-play");
const iframe = modalWindow.querySelector("iframe");
const iframeSrc = iframe ? iframe.src : "";

buttonsModal.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalWindow.classList.add("active");
    if (iframe && iframeSrc) {
      iframe.src = iframeSrc;
    }
  });
});

modalWindow.addEventListener("click", (event) => {
  if (event.target === modalWindow) {
    modalWindow.classList.remove("active");

    if (iframe) {
      iframe.src = "";
    }
  }
});
