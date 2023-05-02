// let element = `<span class="box box--${i}">${i}</span>`;

//definizione elemento contenitore
const grid = document.getElementById("griglia");


// //Ciclo per iterare i numeri
for (i = 1; i <= 100; i++){

//Creazione elemento html
const element = document.createElement('span');
element.classList.add("box");

// Verificare se divisibili per 3
if((i % 3 === 0) && (i % 5 === 0)){
    element.classList.add("fizz-buzz");
    element.innerHTML = "FizzBuzz";
    console.log("prova");
}
else if(i % 3 === 0){
    element.classList.add("fizz")
    element.innerHTML = "Fizz";
}
//Verificare se divisibili per 5
else if(i % 5 === 0){
    element.classList.add("buzz");
    element.innerHTML = "Buzz";
}

else{
    i = i;
    element.classList.add("default-color");
    //assegnazione numero ciclato all'elemento html
element.append(i);
}



//append elemento al contenitore
grid.append(element);
}



//     //Verificare se divisibili per 3 e 5
//     else if(i % 3 === 0 && i % 5 === 0){
//         console.log("BuzzFizz");
//     }
//     else{
//         i = i;
//         console.log(i);
//     }
  








