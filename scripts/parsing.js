function parseAndDisplayName(name){

    let space = name.indexOf(' ');

    let firstName = name.substring(0, space);    
    let lastName = name.substring(space+1); 
    console.log(firstName, lastName, name);

    let spanLast = document.getElementById("last");
    spanLast.innerText = lastName;

    let spanFirst = document.getElementById("first");
    spanFirst.innerText = firstName;

    let spanFull = document.getElementById("full");
    spanFull.innerText = name;
    
}


parseAndDisplayName('Robert DeNiro');


// console.log('the script tags wrks')

// let fullName = "Zy'Aire McCreary-Scott";

// console.log(`the variable fullName is ${fullName}`);

// let space = fullName.indexOf(' ');

// console.log(space);

// let firstName = fullName.substring(0, space);

// console.log(firstName);

// let lastName = fullName.substring(space+1);

// console.log(lastName);