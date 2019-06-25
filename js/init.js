// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

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

/////////////////////////////////
// get browser clientHeight
// alert(document.body.clientHeight);
// document.querySelector(".header").style.height = document.body.clientHeight + "px";


document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.modal');
    let options = {};
    let instances = M.Modal.init(elems, options);
});

function showNav() {
    let data = document.querySelector(".header");

    if (data.style.display === "block") {
        data.style.display = "none";

    } else {
        data.style.display = "block";
    }
}

/////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    let options = {position: "top"};
    var instances = M.Tooltip.init(elems, options);
});