const icone = document.querySelector('.page-3 img')
const texto = document.querySelector('.text-1')
const item = document.querySelector('.item')
const item1de1 = document.querySelector('.item-1-1')
const item2de1 = document.querySelector('.item-2-1')
const item2 = document.querySelector('.item-2')
const item3 = document.querySelector('.item-3')
const item4 = document.querySelector('.item-4')
const body = document.querySelector('body')


icone.addEventListener

('click',()=> {
    texto.classList.toggle('dark');
    item.classList.toggle('dark');
    item1de1.classList.toggle('dark');
    item2de1.classList.toggle('dark');
    item2.classList.toggle('dark');
    item3.classList.toggle('dark');
    item4.classList.toggle('dark');
    icone.classList.toggle('dark');
    body.classList.toggle('dark');
})