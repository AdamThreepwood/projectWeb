
function homeBtn() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function click1() {
        var el = document.getElementById('resetFic');
        //alert(el.innerHTML);
        if (el.textContent == "Make a new fiction") {
          el.textContent = "Randomize again";
        } else {
          el.textContent = "Make a new fiction";
        }
      }
