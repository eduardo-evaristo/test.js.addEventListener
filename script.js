"use strict";

//Variables from the first modal
const button1 = document.querySelector(".js--icon1");
const modal1 = document.querySelector(".page1");
const closeBtn1 = document.querySelector(".js--closemodal1");
//Variables from the second modal
const button2 = document.querySelector(".js--icon2");
const modal2 = document.querySelector(".page2");
const closeBtn2 = document.querySelector(".js--closemodal2");

const buttonModal = document.querySelectorAll(".btn1");

for  (let i = 0; i < buttonModal.length; i++) {
  buttonModal[i].addEventListener("click", function() {
    console.log("I've been clicked!");
  })
}

//Function to open modal window 1
const openModal1 = function () {
    modal1.classList.remove("hidden");
    if (!modal2.classList.contains("hidden")) {
    closeModal2();
  }
};

//Function to close modal window 1
const closeModal1 = function () {
  modal1.classList.add("hidden");
};

//Function to open modal window 2
const openModal2 = function () {
    modal2.classList.remove("hidden");
    if (!modal1.classList.contains("hidden")) {
    closeModal1();
  }
};

//Function to close modal window 2
const closeModal2 = function () {
  modal2.classList.add("hidden");
};

//Event listeners attached to modal 1 components
button1.addEventListener("click", openModal1);
closeBtn1.addEventListener("click", closeModal1);

//Event listeners attached to modal 1 components
button2.addEventListener("click", openModal2);
closeBtn2.addEventListener("click", closeModal2);
