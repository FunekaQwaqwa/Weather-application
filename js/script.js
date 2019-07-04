//function to return when temperature submitted
function myFunction(){
    let temperature = document.getElementById("temperature").value;
    
    if(temperature >=28) {
        alert("PROTECT YOUR SKIN! Hat, Sunglasses, Sandals, Sunscreen" );
    }
    else if(temperature <28 && temperature>=25) {
        alert ("IT'S TIME FOR THE BEACH! Shorts, Sunglasses, Vest/Tank top, flip-flops");
    }
    else if(temperature <25 && temperature>=21) {
        alert ("T-shirt, Light Sweater, Pumps, Jeans")
    }
    else if(temperature <21 && temperature>=18) {
        alert ("IT'S A BIT CHILLY! Jacket, Pants, Sneakers, Cap")
    }

    else if(temperature <18) {
        alert ("DON'T FREEZE OUT THERE! Jacket, Winter Pants, Boots, Scarf, Gloves")
    }
    else {
        alert ("invalid weather condition");
    }
}
