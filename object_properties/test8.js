// Object definition js code

function objectCar() {

    const car = {
        model: "500", 
        color: "navyblue", 
        type: "Mercedez", 
        price: "15million"
        };
        
        document.getElementById('test').innerHTML = car.model;  
        document.getElementById('test').style.fontSize = "20px";  
}


// Accessing methods js code example 1

function shoeCompany() { 
    const shoes = { 
        size: 45, 
        color: "Brown", 
        brand: "Toughies", 
        company: "Bata shoes",
        companyName: function() { 
            return this.company;
        }
    };  

    document.getElementById('test2').innerHTML = shoes.companyName(); 
    document.getElementById('test2').style.fontSize = "20px";

}

// Accessing methods js code example 2

function farmProducts() { 
    const fruits = { 
        name: "apple",
        weight: 100,
        color:"green",  
        fruitColor: function() { 
            return this.color;
        } 
    }; 

    document.getElementById('test3').innerHTML = fruits.fruitColor(); 
    document.getElementById('test3').style.fontSize = "20px";
} 

// Accessing methods in js code example 3 

function houseItems() {
    const house = { 
        color: "blue",
        width: 500,
        roof: "wooden",
        floor:"tiles", 
        houseColor: function() { 
            return this.color;
        }
    }; 

    document.getElementById('test4').innerHTML = house.houseColor();
}




















