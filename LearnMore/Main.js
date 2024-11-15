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


//Getting the list element by ID

const numberlist = document.getElementById('numbers');

//Loop through the numbers 1-12
for (let i = 1; i <= 12; i++){
    // new list element 
    const listItem = document.createElement('li');

      // checking index
    if (i % 2 == 0) {
        //if even set text to even
        listItem.textContent = `Even (${i})`;
    } else {
         //if odd set text to odd
         listItem.textContent = `odd ${i}`;
    } 
       // append list item to the orderes list
      numberlist.appendChild(listItem);
    }
