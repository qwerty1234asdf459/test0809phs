let change = document.querySelector(".img");
let button = document.querySelector(".button");
let changeSrc = change.src;

console.log(changeSrc);

button.addEventListener('click',() => {
    alert("나는 배고프다...");
});

button.addEventListener('click',() => {
    changeImg();
    changeSrc = change.src;
    console.log(changeSrc);
});

function changeImg(){
    change.src = './dulliWelcome.jpg';
    if(changeSrc.includes('dulliWelcome')){
        change.src = './dounerwelcome.jpg';
    }
}