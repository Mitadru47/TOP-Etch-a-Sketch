const main = document.querySelector(".main");
const button = document.querySelector("button");

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

button.addEventListener("click", ()=>{

    let gridSize = prompt("Default Layout - 16 x 16 | Max: 100", "16");
    console.log(gridSize);

    if(gridSize <= 100){
        createGrid(gridSize, gridSize);
    }

    var radio1 = document.getElementById("colorScheme1");
    var gridDivs = document.querySelectorAll(".flex-row div");

    var randomR = 255;
    var randomG = 255;
    var randomB = 255;

    for(var i=0; i<gridDivs.length; i++){

        gridDivs[i].addEventListener("mouseover", (event)=>{

            if(radio1.checked){

                randomR = Math.random() * ((255 - 0) + 0); // Math.random() * (max - min) + min;
                randomG = Math.random() * ((255 - 0) + 0);
                randomB = Math.random() * ((255 - 0) + 0);

                console.log(event.target);
                event.target.style.backgroundColor = "rgba(" + randomR + "," + randomG + "," + randomB + ")";
        
            } else {

                event.target.style.backgroundColor = "rgba(" + randomR + "," + randomG + "," + randomB + ")";

                randomR = randomR * 90 / 100;
                randomG = randomG * 90 / 100;
                randomB = randomB * 90 / 100;
            }

        }, true);
    }

}, true);