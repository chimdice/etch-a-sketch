const container = document.querySelector("#container");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let newGridSize = prompt("Please Choose a new number of squares on each side of the grid!");
    currentGridSize = Number(newGridSize);

    while (currentGridSize >= 100) {
        let newGridSize = prompt("Please Choose a size less than 100!");
        currentGridSize = Number(newGridSize);
    }
    
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };

    createGrid(currentGridSize);
});

let currentGridSize = 16

function createGrid (currentGridSize) {
    
    for (i=0; i < currentGridSize**2 ;i++) {
        const square = document.createElement("div");

        square.addEventListener('mouseenter', () => {

            if (square.style.opacity) {
                let opacity = Number(square.style.opacity);
                if (opacity < 1) {
                    console.log(square.style.opacity);
                    opacity = opacity + 0.1;
                    square.style.opacity = opacity.toString();
                }; 
            } else {
                square.style.opacity = "0.1"

                r = randomColor()
                g = randomColor()
                b = randomColor()

                square.style.background = `rgb(${r}, ${g}, ${b})`;
            };

        });
        square.style.outline ="1px solid black";
        square.style.height = `${100/currentGridSize}%`;
        square.style.width = `${100/currentGridSize}%`;
        container.appendChild(square);
    }
};

let randomColor = () => {
    return Math.floor(Math.random()*255)
};

createGrid(currentGridSize);