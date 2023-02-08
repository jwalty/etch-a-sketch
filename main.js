const gridContainer = document.querySelector('#gridContainer');
let gridDiagonalSize = 16;
let canvasSize = 800;

function createGrid(gridDiagonalSize) {
    gridContainer.innerHTML = '';
    for (let i=0; i < gridDiagonalSize; i++) {
        let columnOfTiles = document.createElement('div');
        columnOfTiles.className = 'tileColumn';
        for (let j=0; j < gridDiagonalSize; j++) {
            let gridTile = document.createElement('div');
            gridTile.className = 'gridTile';
            gridTile.addEventListener('mouseover', () => {
                gridTile.style.backgroundColor = 'grey';
            });
            gridTile.style.height = (canvasSize / gridDiagonalSize).toString() + "px";
            gridTile.style.width = (canvasSize / gridDiagonalSize).toString() + "px";
            columnOfTiles.appendChild(gridTile);
        }
        gridContainer.appendChild(columnOfTiles);
    }
}

createGrid(gridDiagonalSize);

const button = document.querySelector('#gridButton');
button.addEventListener('click', () => { 
    createGrid(window.prompt("Set a desired grid size!","16, 32, 64"));
});
