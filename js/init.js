
// navigator
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let options = {} ;
  let instances = M.Sidenav.init(elems, options);
});


// slider
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.slider');
  let options = { duration: 500, interval:5000 } ;
  let instances = M.Slider.init(elems, options);
});




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// get browser clientHeight
// alert(document.body.clientHeight);
document.querySelector(".header").style.height = document.body.clientHeight + "px";

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.modal');
  let options = {}
  let instances = M.Modal.init(elems, options);
});