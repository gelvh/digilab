//responsive-nav

document.getElementById("menures").onclick = function () { responsivenav() };
function responsivenav() {
    document.getElementById("nav--right").classList.toggle("resshow");
}
window.onscroll = function () { myFunction() };


//fixed-nav

function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scroll-nav").className = "fixed-nav";
    }
    else {
        document.getElementById("scroll-nav").className = "navigation";
    }
}

//active-navbar

var aContainer = document.getElementById("nav--right");
    var as = aContainer.getElementsByClassName("nav-a");
    for (var i = 0; i < as.length; i++) {
      as[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

//active-services

var aContainer = document.getElementById("green-active");
var as = aContainer.getElementsByClassName("green-item");
for (var i = 0; i < as.length; i++) {
      as[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("gractive");
        current[0].className = current[0].className.replace(" gractive", "");
        this.className += " gractive";
      });
    }