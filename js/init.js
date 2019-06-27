//------------------ Take me top button -------------------------//
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
//********************************************************************


//------------------ Mobile nav bar -----------------------------//
function showNav() {
    let header = document.querySelector(".header");

    if (header.classList) {
        header.classList.toggle("nav-bar-logo");
    } else {
        let classes = data.className.split(" ");
        let i = classes.indexOf("nav-bar-logo");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("nav-bar-logo");
        header.className = classes.join(" ");
    }
}
//********************************************************************

// ---------------- Help me button ------------------------------//
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false
    });
});
//********************************************************************


// -------------------- tool-tips on help button ------------------//
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.tooltipped');
    let options = {position: "top"};
    let instances = M.Tooltip.init(elems, options);
});
//********************************************************************


//***************** js for single work page ************************//
//--------------------- slider ------------------------------//
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.slider');
    let options = {height: "300px"};
    let instances = M.Slider.init(elems, options);
});
//********************************************************************

//--------------------- zoom image ------------------------------//
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.materialboxed');
    let options = {};
    let instances = M.Materialbox.init(elems, options);
});
//********************************************************************

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    let options = {startingTop: "15%"};
    var instances = M.Modal.init(elems, options);
});