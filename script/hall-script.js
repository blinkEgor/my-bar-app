document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector("main").classList.toggle("main-none");
    document.querySelector("nav").classList.toggle("open");
})