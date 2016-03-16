// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


//
// alert("I hate this!");


// function defaultName() {
// var nameField = document.getElementById("name_field");
// nameField.value = "Emporor Goatimus";
// }


function changeState() {
  var nameField = document.body.querySelectorAll('*[href="/courses/1/grade_thresholds"]')[5];
  nameField.style.display = "none"
}


function hideButton() {
var button = document.getElementsByClassName("btn")[6];
button.style.display = "none"
}


// function hideRow() {
// var row = document.getElementsByClassName("association container")[4];
// row.style.display = "none"
// }


function hideRow() {
var target_table = document.getElementById("grading_table");
var target_row = target_table.lastElementChild;
target_row.style.display = "none"
}

// function showRow() {
// var row = document.getElementsByClassName("association container")[4];
// row.style.display = "block";
// }

function showRow() {
  var target_table = document.getElementById("grading_table");
  var target_row = target_table.lastElementChild;
  target_row.style.display = "block"
}

function deleteRow() {
var row = document.getElementsByClassName("destroy")[1];
}







//
// function defaultName() {
// var greenbutton = document.body.querySelectorAll('*[href="/courses/1/grade_thresholds"]')[5];
// nameField.section.style.display = "none"
// }
//
//
// function defaultName() {
// var nameField = document.body.querySelectorAll('*[href="/courses/1/grade_thresholds"]')[5];
// nameField.section.style.display = "none"
// }




//
//
//
// document.body.querySelectorAll('/courses/1/grade_thresholds');



// var nameField = document.getElementByClassName("btn btn-success new-association");
// nameField.value = "Emporor Goatimus";
//
// onclick: "defaultName();"
