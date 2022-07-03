function sayHi(div) {
    if (this == div.target) {
        switch (div.type) {
            case 'click':
                div = div.target
                div.classList = 'box-1 active'
                break;
            case 'mouseenter':
                div = div.target
                div.classList = 'box-1 hover'
                break;
            case 'mouseleave':
                div = div.target
                div.classList = 'box-1'
                break;

        }
    }
}

function gg(div){
  
 
        div = div.target
        div.classList = 'box-1 + #pp'
       
 
 
}
// let div = createElement('div')
// div.cl
let box1 = document.querySelector('.box-1')
let box2 = document.querySelector('.box-2')
let box3 = document.querySelector('.box-3')
let box4 = document.querySelector('.box-4')
let box5 = document.querySelector('.box-5')

box2.addEventListener('mouseenter', gg)
box1.addEventListener('mouseleave',sayHi )
box1.addEventListener('click', sayHi)

box3.addEventListener('click', sayHi)
box4.addEventListener('click', sayHi)
box5.addEventListener('click', sayHi)