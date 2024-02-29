let pages = document.querySelectorAll(".page");
let yazi = document.querySelectorAll(".yazi");

pages.forEach((page) => {
  page.addEventListener("mouseover", () => {
    removeActive();
    page.classList.add("active");
  });
  page.addEventListener("mouseleave", () => {
    removeActive();
  });
});

let removeActive = () => {
  pages.forEach((page) => {
    page.classList.remove("active");
  });
};
