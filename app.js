
let coins=0;



function dailyReward(){

coins += 10;

document.getElementById("coins").innerHTML =
coins+" Coins";


document.getElementById("reward").innerHTML =
"🎁 +10 Nayra Coins Added";


}



function openAI(){

alert(
"Nayra AI opening..."
);

}



function wish(){

let msg=[
"🎂 Happy Birthday 🎂",
"✨ Best Wishes ✨",
"🌸 Have a Beautiful Day 🌸"
];


let random =
msg[Math.floor(Math.random()*msg.length)];


document.getElementById("wish").innerHTML=random;


}



function darkMode(){

document.body.classList.toggle("dark");

}



// Telegram Mini App user

if(window.Telegram){

Telegram.WebApp.ready();


let user =
Telegram.WebApp.initDataUnsafe.user;


if(user){

document.getElementById("username").innerHTML=
"Hello "+user.first_name+" 👋";


document.getElementById("userid").innerHTML=
user.id;


}

}
