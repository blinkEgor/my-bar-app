document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector("nav").classList.toggle("open");
})