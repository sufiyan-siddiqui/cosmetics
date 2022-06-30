
window.addEventListener('load',()=>{
document.querySelector('h1.p2 span').classList.add('span');
document.querySelector('.item1 img').style.transform = 'translateX(0)';
document.querySelector('main.p2').style.opacity = '1';
});

document.querySelectorAll('button').forEach((b) => {
    b.addEventListener("click",()=>{
        b.style.backgroundColor = 'seagreen'
        b.style.fontWeight = 'bold'
        b.style.color = '#ffc2d0'
        added = '✓  Added to cart'
        b.innerHTML = added;
    });
});

window.addEventListener('scroll',()=>{
var img2 = document.querySelector('.item2 img'),
    img3 = document.querySelector('.item3 img'),
    img4 = document.querySelector('.item4 img'),
    img5 = document.querySelector('.item5 img'),
    img6 = document.querySelector('.item6 img'),
    img7 = document.querySelector('.item7 img'),
    img8 = document.querySelector('.item8 img'),
    img9 = document.querySelector('.item9 img'),
    img10= document.querySelector('.item10 img'),
    img11= document.querySelector('.item11 img'),
    img12= document.querySelector('.item12 img'),
    img13= document.querySelector('.item13 img'),

    screenPos = window.innerHeight/1.3,
        scrollPos2 = img2.getBoundingClientRect().top,
        scrollPos3 = img3.getBoundingClientRect().top,
        scrollPos4 = img4.getBoundingClientRect().top,
        scrollPos5 = img5.getBoundingClientRect().top,
        scrollPos6 = img6.getBoundingClientRect().top,
        scrollPos7 = img7.getBoundingClientRect().top,
        scrollPos8 = img8.getBoundingClientRect().top,
        scrollPos9 = img9.getBoundingClientRect().top,
        scrollPos10 = img10.getBoundingClientRect().top,
        scrollPos11 = img11.getBoundingClientRect().top,
        scrollPos12 = img12.getBoundingClientRect().top,
        scrollPos13 = img13.getBoundingClientRect().top;

        
        if (scrollPos2 < screenPos) {
    img2.style.transform = 'translateX(0%)'
}
else if(scrollPos2 > screenPos){
    img2.style.transform = 'translate(150%)'
}

    if (scrollPos3 < screenPos) {
    img3.style.transform = 'translate(0)'
}
else if(scrollPos3 > screenPos){
    img3.style.transform = 'translate(150%)'
}

    if (scrollPos4 < screenPos) {
    img4.style.transform = 'translate(0)'
}
else if(scrollPos4 > screenPos){
    img4.style.transform = 'translate(150%)'
}

    if (scrollPos5 < screenPos) {
    img5.style.transform = 'translate(0)'
}
else if(scrollPos5 > screenPos){
    img5.style.transform = 'translate(150%)'
}

    if (scrollPos6 < screenPos) {
    img6.style.transform = 'translate(0)'
}
else if(scrollPos6 > screenPos){
    img6.style.transform = 'translate(150%)'
}

    if (scrollPos7 < screenPos) {
    img7.style.transform = 'translate(0)'
}
else if(scrollPos7 > screenPos){
    img7.style.transform = 'translate(150%)'
}

    if (scrollPos8 < screenPos) {
    img8.style.transform = 'translate(0)'
}
else if(scrollPos8 > screenPos){
    img8.style.transform = 'translate(150%)'
}

    if (scrollPos9 < screenPos) {
    img9.style.transform = 'translate(0)'
}
else if(scrollPos9 > screenPos){
    img9.style.transform = 'translate(150%)'
}

    if (scrollPos10 < screenPos) {
    img10.style.transform = 'translate(0)'
}
else if(scrollPos10 > screenPos){
    img10.style.transform = 'translate(150%)'
}

    if (scrollPos11 < screenPos) {
    img11.style.transform = 'translate(0)'
}
else if(scrollPos11 > screenPos){
    img11.style.transform = 'translate(150%)'
}

    if (scrollPos12 < screenPos) {
    img12.style.transform = 'translate(0)'
}
else if(scrollPos12 > screenPos){
    img12.style.transform = 'translate(150%)'
}

    if (scrollPos13 < screenPos) {
    img13.style.transform = 'translate(0)'
}
else if(scrollPos13 > screenPos){
    img13.style.transform = 'translate(150%)'
}
});



// pagetrans
var pagetrans = document.querySelector('.pagetrans'),
    link = document.querySelector('#go');

    link.addEventListener('click',(a)=>{
        a.preventDefault();
        pagetrans.classList.add('itson');
        setTimeout(()=>{
            window.location = link.href;
        },1600);
    });

