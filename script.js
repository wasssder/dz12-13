let zoo = [] //obj
let arr = [] //dom

let container = document.querySelector('.container')
let button1 = document.querySelector('.button1')
let start = document.querySelector('#start')
let ar = ['red', 'blue', 'green', 'black', 'pink', 'yellow', 'brown'];
let words = ['apple', 'banana', 'orange', 'pear', 'pineapple'];
let i = 0;

class Hamster {
    constructor() {
        this.y = '510px';
        this.x = Math.floor(Math.random() * 900 + 10) + 'px';
        this.background = ar[Math.floor(Math.random() * ar.length)]
        this.food = [];
    }
}



button1.addEventListener('click', () => {
    zoo.push(new Hamster);
    container.insertAdjacentHTML('afterbegin', '<div class="hamster"></div>');
    arr = document.querySelectorAll('.hamster');
    arr.forEach((el, index) => {
        el.style.top = zoo[index].y
        el.style.left = zoo[index].x
        el.style.background = zoo[index].background 
    })
})



const starting = () => {
    let interval = setInterval(() => {
        arr.forEach((el, index) => {
            let speed = Math.floor(Math.random() * 25 + 10)
            let currentY = window.getComputedStyle(el).top.slice(0, -2)
            currentY -= speed
            el.style.top = currentY + 'px'
            if (currentY <= 0) {
                clearInterval(interval)
                zoo[index].food.push(words[Math.floor(Math.random() * words.length)])
                zoo.forEach( (el, i) => {
                    if (el.food.length < 1) arr[i].remove()
                  })
            }
        })
    }, 200)
}

start.addEventListener('click', starting)























// let arr = [];
// let zoo = [];

// class Hamster {
//     constructor() {
//         this.y = '510px';
//         this.x = Math.floor(Math.random() * 905 + 5) + 'px';
//         this.food = [];
//     }
// }

// const button = document.querySelector('.button')
// const start = document.querySelector('#start')
// const container = document.querySelector('.container')

// button.addEventListener('click', () => {
//     zoo.push(new Hamster);
//     container.insertAdjacentHTML('beforeend', `<div class='hamster'></div>`);
//     arr = document.querySelectorAll('.hamster')
//     arr.forEach((el, i) => {
//         el.style.top = zoo[i].y;
//         el.style.left = zoo[i].x;
//     })
// })

// const starting = () => {
//     start.removeEventListener('click', starting);
//     let reverseFalling = setInterval(() => {
//         arr.forEach((el, index) => {
//             let currentY = +window.getComputedStyle(el).top.slice(0, -2)
//             currentY -= Math.floor(Math.random() * 20);
//             el.style.top = currentY + 'px';
//             if (currentY <= 0) {
//                 clearInterval(reverseFalling);
//                 zoo[index].food.push('торт');
//             }
//         })
//     }, 30)
// }

// start.addEventListener('click', starting)




