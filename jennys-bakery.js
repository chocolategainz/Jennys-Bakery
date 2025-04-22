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
let currentPage = 1; //Block-level scope. Tracks which page of items is currently shown
const itemsPerPage = 1; //Controls how many items will appear per page.


//I am using an array of objects to store and define multiple elements under the same delaration for refrencing and iteration
//Array of objects that holds data based on a fake submission request (cake image, name, description, date). 
//Pagination will run through here.

const paginationData = [
    {image: 'submissions for competition/Basque Cake.png', name: 'Basque Cake', description:'Congratulations Caitlin', date: 'May 2023'},
    {image: 'submissions for competition/Victoria Spongecake.png', name: 'Victoria Spongecake', description: 'Congratulations Ben', date: 'April 2023'},
    {image: 'submissions for competition/carrot cake-Alice.png', name: 'Carrot Cake', description: 'Congratulations Alice', date: 'March 2023'},
    {image: 'submissions for competition/white seasame chocolate cookies-lauren.png', name: 'White Seasane Chocolate Cookies', description: 'Congratulations Lauren', date: 'Feburary 2023'},
    {image: 'submissions for competition/Apricot & Rosemerry tart.png', name: 'Apricot & Rosemerry Tart', description: 'Congratulations Ann', date: 'Janurary 2023'},
    {image: 'submissions for competition/Brownie Cake.png', name: 'Brownie Cake', description: 'Congratulations John', date: 'December 2022'},
    {image: "submissions for competition/rainbowCake.png", name: 'Rainbow Cake', description: 'Congratulations Katie', date: 'November 2022'},
    {image: 'submissions for competition/chocolate cake.png', name: 'Chocolate Cupcake', description: 'Congratulations Alice', date: 'October 2022'}
]; 

//The dynamicPages parameter represents the value of the current page. 
function displayedPages (dynamicPages) {
    //Here we are assigning each calculation with the start and end of the array. 
    const index = (dynamicPages - 1); //current page
if(index >= 0 && index <= paginationData.length) { //If the page number is less than 0, or greater than 0, then the next data will display
    const data = paginationData[index];
//We want to to reference our HTML ID called content
const contentContainer = document.getElementById('content'); //targets our id html element
contentContainer.innerHTML = ''; //Data is injected here depending on the page number, but also clears the current data whenever the user navigates to a different page number

/*
Example:
contentContainer.innerHTML = `
    <div>
        <img src="${data.image}" alt="${data.name}">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <p>Date: ${data.date}</p>
    </div>
`;
*/

//We are assigning a new variable called item to our paginationData from the start of the index.

/*We want to create a div and an image element. 
Then we assign our data to the src image and alternative image. 
Then we append our images element to our contaainer element making images a child of container*/
let container = document.createElement('div');
const image = document.createElement('img');
image.src = data.image;
container.appendChild(image);

//Congratulation Description
let competitionDescriptions = document.createElement('p');
competitionDescriptions.textContent = data.description;
container.appendChild(competitionDescriptions);

//Cake Name.
let competitionName = document.createElement('p');
competitionName.textContent = data.name;
competitionDescriptions.appendChild(competitionName);

//Date
let monthOfAward = document.createElement('p');
monthOfAward.textContent = data.date;
competitionName.appendChild(monthOfAward);

contentContainer.appendChild(container);
}; 
 };

/*Creating the pagination*/
function paginationCreation () { 
const pages = Math.ceil(paginationData.length / itemsPerPage);
//Next we want to move our pagination to our empty pagination div
const dynamicPagination = document.getElementById('paginationMaker');
//Use inner HTML and give it an empty id. This will allow me to pull HTML elements to JavaScript AND clear any content inside of it.
//This is a more clear way of clearing my element from any HTML element, 
//and then assigning that element to the new variable called dynamicPagination
dynamicPagination.innerHTML = '';


//i is equal to currentPage (1), if the current page is less than or equal to 4 (the amount of items we ant displayed),
// then loop and repeat each item until it reaches the condition
for (let i = 1; i <= pages; i++) {
//Now we will add CSS properties to a newly created <a> element. This is because we want the pagination navigation bar
//to have the same style upon each click.

const attach = document.createElement('a');
//We want to link our anchor tag to our CSS elements
attach.href = '#';
//Here, we are accsessing the anchor tag element in our HTML and assigning it a value of i. That way, when the user clicks
//on the 3 button, the third layer of content will display in HTML.
attach.innerHTML = i;
//Here we are adding our css class and linking its components to our anchor element called attach.
attach.classList.add('pagination_buttons');


//if our value is the same as the current page, then use our hover affect on each anchor element.
if (i === currentPage) {
    attach.classList.add('pagination_buttons:hover');
}

attach.addEventListener('click' , function (event) {
    event.preventDefault();
    //Here, we are retrieving our click event, and targetting our inner HTML element. We use parseInt to convert 
    //our currentPage value (the current page number) into an interger just in case the value of currentPage is not a full number.
    currentPage = parseInt(event.target.innerHTML);
    displayedPages(currentPage);
    paginationCreation();
});



dynamicPagination.appendChild(attach);
}
 }

//Runs these functiond on the load of the page to show the first item and the pagination bar
displayedPages(currentPage);
paginationCreation();

//This is an example of a reusable function!
function getWords(str) {
    const words = str.split(' ');
    return words; 
    
 }
 function createSentence(words) {
    const sentence = words.join('');
    return sentence;
   
 }

 const inputString = "Twentyfour Twentysix Twentyeight Thirty";
 const words = getWords(inputString);
 const sentence = createSentence(words);

 console.log(words);
 console.log(sentence);
 





