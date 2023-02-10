const gridContainer = document.querySelector('#gridContainer');
let gridDiagonalSize = 16;
let maxDesiredSize = 500;

function createGrid(gridDiagonalSize) {
    
    //grid reasonableness
    if(gridDiagonalSize < 1 || gridDiagonalSize > 100) {
        window.alert("Try something a little more reasonable!");
        return;
    }
    
    //clearing grid on resize/creation
    gridContainer.innerHTML = '';

    //creating a new grid
    for (let i=0; i < gridDiagonalSize; i++) {
        let rowOfColumns = document.createElement('tr');
        rowOfColumns.className = 'tileRow';
        for (let j=0; j < gridDiagonalSize; j++) {
            let gridTile = document.createElement('td');
            gridTile.className = 'gridTile';

            // TODO:
            // Add switching between behaviors in-content rather than through code
            // Current functionality requires commenting out undesirable behaviors

                //BEHAVIOR: SET TO GREY
                // gridTile.addEventListener('mouseover', () => {
                //     gridTile.style.backgroundColor = 'grey';
                // });

                //BEHAVIOR: SET TO RANDOM COLOR
                // gridTile.addEventListener('mouseover', () => {
                //     let randomColorStringBuilder = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                //     gridTile.style.backgroundColor = randomColorStringBuilder;
                // });

                //BEHAVIOR: SET TO CURRRENT COLOR FROM COLOR PICKER
                gridTile.addEventListener('mousedown', () => {
                    let colorPicker = document.getElementById('colorPicker');
                    gridTile.style.backgroundColor = colorPicker.value;
                });

            // TODO: keep grid same size always, this is close but breaks
            // due to border sizes not being accounted for.
            gridTile.style.height = `${maxDesiredSize / gridDiagonalSize}px`;
            gridTile.style.width = `${maxDesiredSize / gridDiagonalSize}px`;
                

            //add tiles to rows
            rowOfColumns.appendChild(gridTile);
        }

        //add rows to table
        gridContainer.appendChild(rowOfColumns);
    }
}

//Selecting size for a new grid
const gridSizeButton = document.querySelector('#gridSizeButton');
gridSizeButton.addEventListener('click', () => { 
    createGrid(window.prompt("Set a desired grid size!","1-100"));
});

//Removing grid for cleaner pics
const borderToggle = document.querySelector('#borderToggle');
borderToggle.addEventListener('click', () => {
    const gridTile = document.querySelectorAll('.gridTile');
    gridTile.forEach((individualTile) => {
        individualTile.classList.toggle('removeBorder');
    });
});

//Clear Grid
const resetGridButton = document.querySelector('#resetGridButton');
resetGridButton.addEventListener('click', () => { 
    const gridTile = document.querySelectorAll('.gridTile');
    gridTile.forEach((individualTile) => {
        individualTile.style.backgroundColor = 'transparent';
    });
});
