const panals = document.querySelectorAll(".panal");

panals.forEach((panal) => {
  panal.addEventListener("click", () => {
    rmoveActive();
    panal.classList.add("active");
  });
});

function rmoveActive() {
  panals.forEach((panal) => {
    panal.classList.remove("active");
  });
}