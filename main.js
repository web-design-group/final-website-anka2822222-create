const selected = document.querySelector(".selected");
const opotionsContain = document.querySelector(".options-contain");

const opotionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    opotionsContain.classList.toggle("active");
})

opotionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label"). innerHTML;
        opotionsContain.classList.remove("active");
    })
})