let squaresNum;

const container = document.querySelector(".container")

if (squaresNum !== undefined) {
    for (let i = 1; i <= (squaresNum * squaresNum); i++) {
        const divsGrid = document.createElement('div')
        divsGrid.classList.toggle("box");
        divsGrid.innerText = "dada"
        container.appendChild(divsGrid);
    }
} else {
    for (let i = 1; i <= 256 ; i++) {
        const divsGrid = document.createElement('div')
        divsGrid.classList.toggle("box");
        divsGrid.innerText = "dada"
        container.appendChild(divsGrid);
    }
}


const button = document.querySelector('button');
button.addEventListener('click', () => {
    squaresNum = prompt("Squares per side: ")
});


console.log(container)

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.classList.add("change")
}));

