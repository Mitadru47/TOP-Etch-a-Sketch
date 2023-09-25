const main = document.querySelector(".main");

function createGrid(rows, columns){

    for(var i=0; i<rows; i++){

        var flex = document.createElement("div");
        flex.classList.add("flex-row");
        
        for(var j=0; j<columns; j++){

            var div = document.createElement("div");
            flex.appendChild(div);
            
            if(j === (columns - 1))
                main.appendChild(flex);

        }
    }

}

createGrid(16, 16);

var gridDivs = document.querySelectorAll(".flex-row div");

var randomR = 255;
var randomG = 255;
var randomB = 255;

for(var i=0; i<gridDivs.length; i++){

    gridDivs[i].addEventListener("mouseover", (event)=>{

        // var randomR = Math.random() * ((255 - 0) + 0); // Math.random() * (max - min) + min;
        // var randomG = Math.random() * ((255 - 0) + 0);
        // var randomB = Math.random() * ((255 - 0) + 0);

        console.log(event.target);
        // event.target.style.backgroundColor = "rgba(" + randomR + "," + randomG + "," + randomB + ")";
    
        event.target.style.backgroundColor = "rgba(" + randomR + "," + randomG + "," + randomB + ")";

        randomR = randomR * 90 / 100;
        randomG = randomG * 90 / 100;
        randomB = randomB * 90 / 100;

    }, true);
}