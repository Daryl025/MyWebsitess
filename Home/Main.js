console.log("javascript file is successfuly linked!"); // testing

//getting the current year using js date() object
const CurrentYear = new Date().getFullYear();

// Displaying current year in console
console.log(CurrentYear);

//getting the current full date
const FullDate= new Date().toString();

// display current date
console.log(FullDate);

// using the get element by id method to find the footers copyrighted element
const CopyrightElement= document.getElementById("Copyright");

//Update the content with the new year
CopyrightElement.innerHTML=`&copy; Daryl Tchouala,${CurrentYear}`; // used innerHTML because i used (&copy) which   is an HTML entity
                                                                  

// get button by its id
const ButtonElement= document.getElementById("Btn-alert");

//add an event listener to the button
ButtonElement.addEventListener('click', function() {

    // when the button is clicked show the alert message
    alert("You're about to learn more about this site. Have fun reading"); 
});                                              


// Changing button text when mouse hovers over it
ButtonElement.onmouseover=function(){
    ButtonElement.innerText="Changed because you're Hovering"; // changing text
    console.log("Mouse Over: Buttun text changed to 'Changed because you're Hovering' ");
};

// Revertiing button text when mouse stops to hover over it
ButtonElement.onmouseout=function(){
    ButtonElement.innerText="Click Me!"; // changing text
    console.log("Mouse out: Buttun text revrts to Orginal form");
};