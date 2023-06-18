/*
const headerBackgroundColor = document.getElementById("colorHeader");
colorHeader.style.backgroundColor = "";
//"#a0785a";

const navbarBackgroundColor = document.getElementById("menuBarColor");
navbarBackgroundColor.style.backgroundColor = "#fc89ac";
*/


//Reference all the filter buttons
//Buttons
const filterButtons = document.querySelectorAll('.filter');

//List of images
const itemList = document.querySelectorAll('.item');

//Add an event listener to each button
filterButtons.forEach((button) => {
button.addEventListener('click' , () => {
const filtered = button.getAttribute('data-filter'); 

itemList.forEach((item) => {
    if (filtered === 'all' || item.classList.contains(filtered)) {
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    };
});

});
});












