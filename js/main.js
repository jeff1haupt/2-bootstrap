const el1 = document.getElementById("siteTent");
el1.addEventListener("click", function() {
    let checkedButton = document.getElementById("labelTent");
    checkedButton.classList.remove("btn-primary");
    checkedButton.classList.add("btn-success");
    let uncheckedButton = document.getElementById("labelRV");
    uncheckedButton.classList.remove("btn-success");
    uncheckedButton.classList.add("btn-primary");
});

const el2 = document.getElementById("siteRV");
el2.addEventListener("click", function() {
    let checkedButton = document.getElementById("labelRV");
    checkedButton.classList.remove("btn-primary");
    checkedButton.classList.add("btn-success");
    let uncheckedButton = document.getElementById("labelTent");
    uncheckedButton.classList.remove("btn-success");
    uncheckedButton.classList.add("btn-primary");
});