document.addEventListener("DOMContentLoaded", function () {
  const switcher = document.querySelector("input[type='checkbox']");
  const body = document.body;

  switcher.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark-mode");
      img.classList.add("image-dark");
    } else {
      body.classList.remove("dark-mode");
    }
  });
});
