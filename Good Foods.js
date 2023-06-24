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
/* iteration exmple */
let home = "unsure";
let arr = Array.from(home);
console.log(arr);

/*Map Function Example*/
const digits = [2, 8, 5, 4, 9, 0];
const multiply = digits.map(number => number * 2);
console.log(multiply);

/*Pagination*/
/*Global Variables*/
const currentPage = 1;
const itemsPerPage = 1;


//I am using an array of objects to store and define multiple elements under the same delaration for refrencing and iteration
const paginationData = [
    {image: 'competition content/Basque Cake.png', name: 'Basque Cake', description:'Congratulations Caitlin', date: 'May 2023'},
    {image: 'competition content/Victoria Spongecake.png', name: 'Victoria Spongecake', description: 'Congratulations Ben', date: 'April 2023'},
    {image: 'competition content/carrot cake-Alice.png', name: 'Carrot Cake', description: 'Congratulations Alice', date: 'March 2023'},
    {image: 'competition content/white seasame chocolate cookies-lauren.png', name: 'White Seasane Chocolate Cookies', description: 'Congratulations Lauren', date: 'Feburary 2023'},
    {image: 'competition content/Apricot & Rosemerry tart.png', name: 'Apricot & Rosemerry Tart', description: 'Congratulations Ann', date: 'Janurary 2023'},
];

const content = document.getElementById('#paginationContent');
const previous = document.querySelector('.previousButton');
const next = document.querySelector('.nextButton');
const pageNumbers = document.getElementById('#paginationNumbers');
//The dynamicPages parameter represents the value of the current page. 
function displayedPages (dynamicPages) {
    //Here we are assigning each calculation with the start and end of the array. 
    const startIndex = (dynamicPages - 1) * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage;
}

/*Creating the pagination*/
function paginationCreation () { 
const pages = Math.ceil(paginationData.length / itemsPerPage);
//Next we want to move our pagination to our empty pagination div
const dynamicPagination = document.getElementById(paginationCreation);
//Use inner HTML and give it an empty id. This will allow me to pull HTML elements to JavaScript AND clear any content inside of it.
//Content is already cleared so no need
const paginationElement = dynamicPagination.innerHTML = ""; 
};

//i is equal to currentPage (1), if the current page is less than or equal to 4 (the amount of items we ant displayed),
// then loop and repeat each item until it reaches the condition
for (const i = 1; i <= itemsPerPage; i++) {
//Now we will add CSS properties to a newly created <a> element. This is because we want the pagination navigation bar
//to have the same style upon each click.

const attach = document.createElement('a');
//We want to link our anchor tag to our CSS elements
attach.href = '#';
//Here, we are accsessing the anchor tag element in our HTML and assigning it a value of i. That way, when the user clicks
//on the 3 button, the third layer of content will display in HTML.
attach.innerHTML = i;
//Here we are adding our css class and linking its components to our anchor element called attach.
attach.classList.add('.pagination_buttons');


//if our value is the same as the current page, then use our hover affect on each anchor element.
if (i === currentPage) {
    attach.classList.add('.pagination_buttons:hover');
}

}










