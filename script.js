// let dasIstEinBoolean = true;
// let dasIstEineZahl = 5;
// let dasIstEinString = "Hallo Welt";
// let dasIstKeinWert;
// console.log(dasIstKeinWert, dasIstEinBoolean, dasIstEineZahl, dasIstEinString);

// let zahl1 = 5;
// let zahl2 = 10;

// console.log(zahl1 + zahl2);
// console.log(zahl1 - zahl2);
// console.log(zahl1 * zahl2);
// console.log(zahl1 / zahl2);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// while (zahl1 < 20)
//     {
//     console.log(zahl1);
//     zahl1++;
// }

// if (zahl1 < zahl2) {
//     console.log("Zahl1 ist kleiner als Zahl2");
// }
// else if (zahl1 > zahl2) {
//     console.log("Zahl1 ist größer als Zahl2");
// }   

// let firstName = "Alexander";
// let lastName = "Faber";

// let fullName = firstName + " " + lastName;

// console.log("Alpha" < "Beta");


// function addNumbers(zahl1, zahl2)
// {
//     let ergebnis = zahl1 + zahl2;

//     return ergebnis;
// }

// let ergebnis = addNumbers(zahl1, zahl2);
// console.log(ergebnis);


// function functionName()
// {
//     console.log("Hello");
//     console.log("World");
//     console.log("!");
// }

// for (let i = 0; i <= 2; i++) 
// {
//     console.log(functionName());
// }

// function multiplyNumbers(zahl1, zahl2)
// {
//     let ergebnis = zahl1 * zahl2;
//     return ergebnis;
// }   

// console.log(multiplyNumbers(6, 8));

// let zahl1 = 0.8;

// if (zahl1 < 0.5)
// {
//     zahl1 = 0;
// }
// else
// {
//     zahl1 = 1;
// }
// console.log(zahl1)

// let zahl1 = 5;
// let zahl2 = 5;

// function zahlenVergleicher(zahl1, zahl2)
// {
//     if (zahl1 == zahl2)
//     {
//         Ergebnis = "Die zahlen sind gleich!";
//     }
//     else if (zahl1 > zahl2) {
//         Ergebnis = "Die erste zahl ist größer!"
//     }
//     else if(zahl1 < zahl2) {
//         Ergebnis = "Die erste zahl ist kleiner!"
//     }
//     else {
//         return 0;
//     }
//  return Ergebnis;
// }

// function oddEven(zahl1)
// {
//     if (zahl1 % 2 == 0){
//         Ergebnis2 = "Die Zahl ist gerade!";
//     }
//     else {
//         Ergebnis2 = "Die Zahl ist ungerade!";
//     }
//     return Ergebnis2;
// }

// var Ergebnis = zahlenVergleicher(zahl1, zahl2);
// var Ergebnis2 = oddEven(zahl1);
// console.log(Ergebnis+"\n"+Ergebnis2);

// let difficulty = "Hard";
// switch (difficulty)
// {
//     case "Easy": console.log("Difficulty: Easy");
//         break;
//     case "Medium": console.log("Difficulty: Medium");
//         break;
//     case "Hard": console.log("Difficulty: Hard");
//         break;
//     default: console.log("FEHLER");
//         break;
//     }
// let canZombiesSmashDoors = (difficulty === "Hard") ? "YES" : "NO";
// console.log("can Zombies Smash Doors:"+canZombiesSmashDoors);
// let basis = 4;
// let exponent = 4;
// let ergebnis = basis;

// function Exponentialfkt(basis, exponent)
// {
//     for (let i=1;i< exponent;i++)
//     {
//     ergebnis = basis * ergebnis;
//     }
//     return ergebnis;
// }

// ergebnis = Exponentialfkt(basis, exponent);
// console.log(ergebnis);

function changeBackground(){
    document.body.style.backgroundColor = "red";
};

    const btn = document.getElementById('btn-1');
    btn.addEventListener("click", changeBackground);


function PlusEins()
{
    span1.textContent = zahl = zahl +1;
}
function MinusEins()
{
    span1.textContent = zahl = zahl -1;
}
let zahl = 0;
let span1 = document.getElementById('span1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');

btn2.addEventListener("click", PlusEins);
btn3.addEventListener("click", MinusEins);





