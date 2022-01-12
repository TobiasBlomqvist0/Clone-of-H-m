
//För Top Dropdown
const dropdown = document.getElementById("dropdown")
const activate = document.getElementById("dropdownactive")
const arrow = document.getElementById("arrow")

let check = 1;
let checkdropdown = 1;
//Slutet av Top Dropdown

loop()

function loop() {
    requestAnimationFrame(loop)

    //För top Dropdown
    if (check == 1) {
        if (screen.width < 480) {
            dropdown.style.display = "none";
            activate.style.display = "flex"
            check = 0;
        }
    }
    if (check == 0) {
        if (screen.width > 480) {
            dropdown.style.display = "flex"
            activate.style.display = "none"
            check = 1;
        }
    }

    if (checkdropdown == 1) {
        arrow.addEventListener("click", () => {
            dropdown.style.display = "flex"
            checkdropdown = 0;
        })
    }

    if (checkdropdown == 0) {
        arrow.addEventListener("click", () => {
            dropdown.style.display = "none"
            checkdropdown = 1;
        })
    }
}