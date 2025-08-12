const div = document.querySelector(".btn-container");
const btn = document.getElementById("btn");

div.addEventListener("click", () => {
    alert("Hola! Soy el div");
});

btn.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Hola!");
});
