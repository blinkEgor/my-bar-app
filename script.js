const entrance = document.querySelector(".entrance");
const closedDoor = document.getElementById("closed-door");
const openedDoor = document.getElementById("opened-door");

openedDoor.style.display = "none";

const openTheDoor = () => {
    closedDoor.style.display = "none"
    openedDoor.style.display = "";
};
closedDoor.addEventListener("click", openTheDoor)