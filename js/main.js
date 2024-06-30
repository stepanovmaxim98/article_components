const shareButton = document.querySelector(".share");
const modal = document.querySelector("#modal");

shareButton.addEventListener("click", () => {
  if (modal.style.opacity === "0") {
    modal.style.opacity = "1";
  } else {
    modal.style.opacity = "0";
  }
});
