const book = {
    pages: 100,
    color: "blue",
    size: 10,  
    subjcet: "English", 
    title: "Class one",
}; 

document.getElementById('mybook').innerHTML = book.color; 
document.getElementById('book').innerHTML = book.pages; 

// another object definition 

const person = { 
    name: "Flemming", 
    age: 24, 
    weight: 80, 
    height: 2.5, 
    faith:"Christian"
}; 

document.getElementById('person').innerHTML = person.name; 

// another object definition but calling a function 

function subcounty() { 
    const post = { 
        chp_name: "Wafula",  
        schmt_name: "Wekesa", 
        household_size: 10, 
        chief_name: 'Nekesa', 
        village_name: "Khasolo A"
    };

    document.getElementById('netdist').innerHTML = post.chp_name;
}

