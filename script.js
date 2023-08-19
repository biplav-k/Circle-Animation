// Get the necessary elements
const wrapper = document.getElementById('wrapper');
const slider = document.getElementById('slider');
const speedSlider = document.getElementById('speed');

// Initial population of the wrapper
changeSpeed();
populateWrapper();


// Event listeners
slider.addEventListener('input', populateWrapper);
speedSlider.addEventListener('input', changeSpeed);

// change speed function
function changeSpeed() {
  const speed = 60 - parseInt(speedSlider.value) + 's';
  document.documentElement.style.setProperty('--speed', speed);
}

// Populate the wrapper with circles
function populateWrapper() {
  // Clear the previous content
  wrapper.innerHTML = '';
  //get height of the wrapper
  let wrapperHeight = wrapper.offsetHeight; 
  // Get the value of the slider controls for number of circles
  const n = parseInt(slider.value);
  
  // update variables 
  let distance = (wrapperHeight / (2*n ));
  let height = (Math.sqrt(3) / 2) * distance;

  document.documentElement.style.setProperty('--distance', distance+'px');
  document.documentElement.style.setProperty('--height', height+'px');
  document.documentElement.style.setProperty('--number', (2*n+6)/2);
  
  // Populate the wrapper with circles
  let count = 0;
  for (let i = 1; i <= (2*n-1); i++) {
    j = n;
    let row = '<div class="row">';
    if (i <= n ) {
      row += generateCircleDivs(n, n+i-1);
    } else {
      row += generateCircleDivs(n, 2*n - 1 - (i-n));
    }
    row += '</div>';
    wrapper.innerHTML += row;
  }
}

// generate circles 
function generateCircleDivs(n, i) {
  let width = (100 / (2*n - 1)) + '%';
  let html = '';
  for (let count = 0; count < i; count++) {
    html += '<div class="circle-wrap"><div class="circle"></div></div>';
  }
  return html;
}