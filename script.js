const closedDoor = document.getElementById("closed-door");
const openedDoor = document.getElementById("opened-door");
const leftDoorOp = document.getElementById("left-door-op");
const rightDoorOp = document.getElementById("right-door-op");

openedDoor.style.display = "none";

const openTheDoor = () => {
    closedDoor.style.display = "none"
    openedDoor.style.display = "";
};
closedDoor.addEventListener("click", openTheDoor);

const closeTheDoor = () => {
    openedDoor.style.display = "none";
    closedDoor.style.display = "";
};
leftDoorOp.addEventListener("click", closeTheDoor);
rightDoorOp.addEventListener("click", closeTheDoor);