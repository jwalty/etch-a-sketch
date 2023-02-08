const gridContainer = document.querySelector('#gridContainer');
let gridDiagonalSize = 16;
let canvasSize = 800;
uniqueColored = 0;





function createGrid(gridDiagonalSize) {

    if (gridDiagonalSize < 0 || gridDiagonalSize > 100) {
        window.alert("Try something a little more reasonable!");
        location.reload();
    }

    uniqueColored = 0;
    gridContainer.innerHTML = '';
    var startDate = new Date ();
    var startTime = startDate.getTime();
    for (let i=0; i < gridDiagonalSize; i++) {
        let columnOfTiles = document.createElement('div');
        columnOfTiles.className = 'tileColumn';
        for (let j=0; j < gridDiagonalSize; j++) {
            let gridTile = document.createElement('div');
            gridTile.className = 'gridTile';
            gridTile.addEventListener('mouseover', () => {
                if (gridTile.style.backgroundColor != 'grey') {
                    uniqueColored++;
                    console.log(uniqueColored);
                    if (uniqueColored == gridDiagonalSize * gridDiagonalSize) {
                        var date_now = new Date();
                        var time_now = date_now.getTime();
                        var time_diff = time_now - startTime;
                        var seconds_elapsed = time_diff / 1000;
                        window.alert(`It took ${seconds_elapsed} seconds to fill in ${gridDiagonalSize * gridDiagonalSize} boxes! Great job!`);
                    }
                }
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
    createGrid(window.prompt("Set a desired grid size!","16"));
});
