// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const gridHeight = document.getElementById("inputHeight").value;
    const gridWidth = document.getElementById("inputWidth").value;
    const container = document.getElementById("pixel_canvas");

    for(let i = 0; i < gridHeight; i++ ) {
        let row = container.insertRow(i);

        for(let j = 0; j < gridWidth; j++) {
            let cell = row.insertCell(j);

            cell.addEventListener('click', function(event){

                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            })
        }
    }
};

document.getElementById('sizePicker').addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
});


document.getElementById('resetbtn').addEventListener('click', function () {
    document.getElementById('pixel_canvas').innerHTML = "";
})