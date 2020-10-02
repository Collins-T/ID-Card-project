const close = document.querySelector('.close');
const open = document.querySelector('.navbar-toggler');
const wrapper = document.querySelector('.wrapper');


// sidebar functionality use to toggle sidebar menu
if(outerWidth < 768){
    wrapper.classList.add('hidden');
}
close.addEventListener('click', () =>{
    wrapper.classList.toggle('hidden');
})
open.addEventListener('click', () =>{
    wrapper.classList.toggle('hidden');
})

