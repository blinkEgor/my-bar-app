const closedDoor = document.getElementById("closed-door");
const openedDoor = document.getElementById("opened-door");
const doorsOp = document.querySelector(".doors-op");

openedDoor.style.display = "none";

closedDoor.addEventListener("click", 
() => {
    closedDoor.style.display = "none";
    openedDoor.style.display = "";
});

doorsOp.addEventListener("click", 
() => {
    openedDoor.style.display = "none";
    closedDoor.style.display = "";
});