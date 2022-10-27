function parseAndDisplayName(name){

    let space = name.indexOf(' ');

    let firstName = name.substring(0, space);  

    let lastName = name.substring(space+1);

    let spanFull = document.getElementById("full");

    let spanFirst = document.getElementById("first");
    
    let spanLast = document.getElementById("last");
   
    console.log(firstName, lastName, name);

    if (name.substring(0, space)) {
        spanFull.innerText = name;

        spanFirst.innerText = firstName;

        spanLast.innerText = lastName;
    }  else if (name.substring(0)){
        spanFull.innerText = name;

        spanFirst.innerText = firstName;

        
    } else if(){
        
    }

    // switch (name) {
    //     case name.substring(0):
    //         spanFull.innerText = name;
    //         break;
    
    //     default:
    //         spanFull.innerText = name;

    //         spanFirst.innerText = firstName;
    
    //         spanLast.innerText = lastName;
    //         break;
    // }
  
    
}


parseAndDisplayName('bruce');

// parseAndDisplayName('Brenda Kaye');

// parseAndDisplayName('Dana Lynn Wyatt');