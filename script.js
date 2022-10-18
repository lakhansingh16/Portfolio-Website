document.addEventListener('DOMContentLoaded',()=>{
    const navUL=document.querySelector('.navbar-items');
    console.log(navUL)
    const hamburger= document.querySelector('#hamburger');
    hamburger.addEventListener('click',()=>{
        navUL.classList.toggle('show');
    });
});