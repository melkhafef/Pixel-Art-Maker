// Select color input
let color = document.querySelector('#colorPicker');
// Select size input
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');
// Select form
let form = document.querySelector('#sizePicker');
//Select table
let table = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function makeGrid(e) {
  // prevent submit Default
  e.preventDefault();
  // clear the table
  table.innerHTML = '';
  // add rows to table
  for (let i = 0; i < parseInt(height.value); i++) {
    table.insertAdjacentHTML('beforeend', '<tr></tr>');
  }
  // select rows
  let rows = document.querySelectorAll('#pixelCanvas tr');
  // add cells to each row
  for (let r = 0; r < rows.length; r++) {
    for (let c = 0; c < parseInt(width.value); c++) {
      rows[r].insertAdjacentHTML('beforeend', '<td onclick=colorPixel(this)></td>')
    }
  }
});
// colorPixel function to color the pixel with selected color from picker  when cilck on pixel 
function colorPixel(cell) {
  cell.style.backgroundColor = color.value;
}