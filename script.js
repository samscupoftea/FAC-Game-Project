// const canvas = document.querySelector('canvas')
// const c = canvas.getContext('2d')

const block = document.getElementById("block");
const gap = document.getElementById("gap");

gap.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 120) + 150);
    gap.style.right = random + "px";

});

console.log("HELLO WORLD");




// function Bar() {
//     this.left = random(width / 2);
//     this.right = random(width / 2);
//     this.x = height;
//     this.w = 20;
// }



