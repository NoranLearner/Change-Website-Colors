
// Add Default Local Storage Class On Body
document.body.classList.add(localStorage.getItem('pageColor') || 'red');

var el = document.querySelectorAll('.color-switcher li');

var classesList = [];

// Loop on Elements

for (var i = 0; i < el.length; i++) {
  // Get Classes list
  classesList.push(el[i].getAttribute('data-color'));

  el[i].addEventListener('click', function name (params) {
    // Remove All Old Classes
    document.body.classList.remove(...classesList);
    // Add Current Class From Li Data Attribute
    document.body.classList.add(this.getAttribute('data-color'));
    // Add Data To Local Storage
    localStorage.setItem('pageColor', this.getAttribute('data-color'));
    // console.log(localStorage.getItem('pageColor'));
  }, false);
}

// console.log(classesList);

localStorage.removeItem('pageColor');
