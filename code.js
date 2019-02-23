// function myFunction() {
//      var date1 = new Date('febuary 17, 1995 03:24:00');
//      console.log("Date " + date1);
// }

function myFunction() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var today = "Feburary" + dd + " , " + yyyy;
  console.log("date" + today);
  var date = document.getElementById("date-para");

  date.innerHTML = today;
}
window.onload = myFunction();
var agentName = ["ketty", "Maria", "Thomas", "Jainson"];
var agentNo = [
  "1-896 818 7340",
  "1-866 817 7009",
  "1-806 818 7679",
  "1-824 818 7431"
];

// for (var i = 0; i < agentName.length; i++) {
//   var agName = document.getElementById("name2");
//   console.log(agentName);

//   agName.innerHTML = agentName[i];
// }

var namefunctions = function namefunc() {
  if (document.getElementById("name1")) {
    var ketty = document.getElementById("name1");
    var ketty1 = agentName[0];
    ketty.innerHTML = ketty1;
    var kettyPhone = document.getElementById("phone");
    var ketty1Phone = agentNo[0];
    kettyPhone.innerHTML = ketty1Phone;

    var maria = document.getElementById("name2");
    var maria1 = agentName[1];
    maria.innerHTML = maria1;
    var mariaPhone = document.getElementById("phone2");
    var maria1Phone = agentNo[1];
    mariaPhone.innerHTML = maria1Phone;

    var Thomas = document.getElementById("name3");
    var Thomas1 = agentName[2];
    Thomas.innerHTML = Thomas1;
    var ThomasPhone = document.getElementById("phone3");
    var Thomas1Phone = agentNo[2];
    ThomasPhone.innerHTML = Thomas1Phone;

    var jainson = document.getElementById("name4");
    var jainson1 = agentName[3];
    jainson.innerHTML = jainson1;
    var jainsonPhone = document.getElementById("phone4");
    var jainson1Phone = agentNo[3];
    jainsonPhone.innerHTML = jainson1Phone;
  } else {
    console.log("cannot find name 1");
  }
};
// window.onload = namefunctions;
// var walkForwards = true;
// function catWalk() {
//   var img = document.getElementById("cat");
//   var currentLeft = parseInt(img.style.left);
//   if (walkForwards && currentLeft > window.innerWidth - img.width) {
//     walkForwards = false;
//   }
//   if (!walkForwards && currentLeft <= 0) {
//     walkForwards = true;
//   }
//   if (walkForwards) {
//     img.style.left = currentLeft + 10 + "px";
//   } else {
//     img.style.left = currentLeft - 10 + "px";
//   }
// }

// setInterval(catWalk, 50);

// function validateForm() {
//   var x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
}
