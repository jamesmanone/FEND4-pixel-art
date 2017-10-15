const setColor = ({target}) => target.bgColor = document.getElementById('colorPicker').value;

const makeGrid = evt => {
  evt.preventDefault();
  
  const width = document.getElementById('input_width').value;
  let height = document.getElementById('input_height').value;
  const canvas = document.getElementById('pixel_canvas');
  
  // Validate dimensions. Shouldn't ever be called due to min vals in html.
  if(!(width && height)) return alert('He who paints in zero dimensions creates no masterpieces');
  
  // Clear old cells. GC will remove event listeners.
  while(canvas.childNodes.length) canvas.lastChild.remove()
  
  // Create new cells
  while(height--) canvas.appendChild(document.createElement('tr'));
  for(let row of canvas.childNodes) for(let i=width;i--;) row.appendChild(document.createElement('td'));
  
  // Add event listeners
  // This could be placed within the cell creation loop, but I prefer keeping this seperate for seperaration's sake.
  for(let row of canvas.childNodes) for(let cell of row.childNodes) cell.addEventListener('click', setColor);
};

document.getElementById('sizePicker').addEventListener('submit', makeGrid);
