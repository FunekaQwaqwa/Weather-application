//function to return when temperature submitted
function whattoWear(){
    let temperature = document.getElementById("temperature").value;
    
    if(temperature >= 28) {
        document.getElementById("outfit").innerHTML="PROTECT YOUR SKIN! Hat, Sunglasses, Sandals, Sunscreen";
    }    
    else if(temperature < 28 && temperature >=25){
        document.getElementById("outfit").innerHTML="IT'S TIME FOR THE BEACH! Shorts, Sunglasses, Vest/Tank top, flip-flops";
    }
    else if(temperature < 25 && temperature >= 21){
        document.getElementById("outfit").innerHTML="T-shirt, Light Sweater, Pumps, Jeans";
    }
    else if(temperature < 21 && temperature >= 18){
        document.getElementById("outfit").innerHTML="IT'S A BIT CHILLY! Jacket, Pants, Sneakers, Cap";
    }
    else if(temperature >= 1 && temperature < 18){
        document.getElementById("outfit").innerHTML="DON'T FREEZE OUT THERE! Jacket, Winter Pants, Boots, Scarf, Gloves";
    }
    else{
        document.getElementById("outfit").innerHTML= "EXTREME COLD! SAFER TO STAY INDOORS";
    }
}
        
