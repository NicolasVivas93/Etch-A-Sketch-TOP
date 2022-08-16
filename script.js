const container = document.querySelector(".gridContainer")

let squaresNum = 16;
createGrid(squaresNum)

function createGrid(num) {
    for (let i = 1; i <= (num * num); i++) {
        const divsGrid = document.createElement('div')
        divsGrid.classList.add("item");
        container.style.setProperty("grid-template-columns", `repeat(${num}, auto)`) 
        container.appendChild(divsGrid);
    }
    paintBox()
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    container.innerHTML = ""
    squaresNum = prompt("Squares per side: ")
    if (squaresNum <= 100) {
        createGrid(squaresNum)        
    } else {
        alert("Squares must be less than 100")
    }
});

function paintBox() {
    const boxes = document.querySelectorAll(".item");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
        box.classList.add("change")
    }));    
}

