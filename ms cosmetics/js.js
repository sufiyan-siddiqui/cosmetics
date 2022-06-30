
// hamburger
var veggie = document.querySelector("#veggie"),
menu = document.querySelector(".menu");
veggie.addEventListener('click',()=>{
    veggie.classList.toggle('add');
    menu.classList.toggle('add');
});

// cart
var cart = document.querySelector("nav .cart"),
    cartmenu= document.querySelector(".cartmenu"),
    cart1 = document.querySelector("#cart");
cart.addEventListener("click",()=>{
    cart.classList.toggle("add");
    cartmenu.classList.toggle('add');
})

var content = ['Welcome to the most skin friendly & nature friendly cosmetic store. 🥰'];
let c=0, indexs = 0, presentText = '', letters = '';
setTimeout(function typing(){
    presentText = content[c];
    letters = presentText.slice(0, ++indexs);
    document.getElementById('welcome').textContent = letters;
    setTimeout(typing, 50);
},3000)
// typing(); not required, since set timeout or i can use direct arrow function (this is explaination)

// scroll
window.addEventListener('scroll',()=>{
    var scroll = document.querySelector(".scroll"),
        scroll1 = document.querySelector(".scroll1"),
        scroll2 = document.querySelector(".scroll2"),
        about = document.querySelector(".sabout h1 span"),
        prod = document.querySelector(".prod span"),
        cont = document.querySelector('#contact h1 span')
        logo = document.querySelector('nav .logo'),
        
        scrollPos = scroll1.getBoundingClientRect().top,
        screenPos = window.innerHeight/1.4,
        scrollPos1 = prod.getBoundingClientRect().top,
        scrollPos2 = scroll2.getBoundingClientRect().top,
        scrollPos3 = cont.getBoundingClientRect().top;
    
    if(window.scrollY > 300 ) {
        scroll.style.opacity = '0';
        about.classList.add("span");
        logo.style.position = 'fixed';
        logo.style.left = '50%';
        logo.style.transform = 'translateX(-50%)';
    }
    else if (window.scrollY < 300 ) {
        scroll.style.opacity = '1'; 
        about.classList.remove("span");
    }
    
    if(scrollPos1 < screenPos){
        scroll1.style.opacity = '0'; }
    else if(scrollPos1 > screenPos){
        scroll1.style.opacity = '1'; }
    
    if(scrollPos2 < screenPos){
        scroll2.style.opacity = '0'; }
    else if(scrollPos2 > screenPos){
        scroll2.style.opacity = '1'; }

    if(scrollPos1 < screenPos){
        prod.classList.add("span"); }
    else if(scrollPos1 > screenPos){
        prod.classList.remove("span"); }

    if(scrollPos3 < screenPos){
        cont.classList.add("span"); }
    else if(scrollPos3 > screenPos){
        cont.classList.remove("span"); }

});

// contact
document.querySelector('#contact form button').addEventListener('click',(e)=>{
e.preventDefault();
    var name = document.querySelector('#contact .cont form .name').value,
        img = document.querySelector('#contact .cont form img'),
        p = '';
        if (name === '' || name === ' ') {
            p += `<p> please enter your name<p>`;
            document.querySelector('#contact form .h2').innerHTML = p;
        }
        else{
            p += `<p> Hii ${name}. Thank you for reaching us out. <br> We'll be sure to respond😄 <p>`;
        document.querySelector('#contact form .h2').innerHTML = p;
        img.style.animation ='cele 1.5s 1 alternate ease';
        }
        name.preventDefault();
});

// loader
window.addEventListener('load',()=>{
    document.querySelector('.loader').style.opacity='0';
    document.querySelector('.loader').style.display='none';
    document.querySelector('nav a.logo').style.animation = 'logo 2s 1 alternate ease';
    document.querySelector('.ques').style.animation= 'ques 6s 1 ease-out forwards';
    document.querySelector('main').style.animation = 'main 2s 1s 1 forwards ease';
})

// help circle
var quesMatter = document.querySelector('.ques .matter'),
    icon = document.querySelector('.ques .quesicon');
icon.addEventListener('mouseenter',()=>{
    quesMatter.style.opacity = '1';
    quesMatter.style.transform = 'translate(0,0)'
    icon.style.transform = 'rotate(-180deg)'
});
icon.addEventListener('mouseleave',()=>{
    quesMatter.style.opacity = '0';
    quesMatter.style.transform = 'translate(10%,10%)'
    icon.style.transform = 'rotate(0deg)'
});


// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[carousal]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// carousal 1                                               

var carousal1 = document.querySelector(".carousal1 .formove"),
    next1 = document.querySelector('.container1 .next1'),
    prev1 = document.querySelector('.container1 .prev1'),
    button = document.querySelectorAll(".carousal1 .formove button"),
    counter = 0, size = -100;
setInterval(()=>{
    counter++;
    if (counter > 4 ) {
        counter = 0;
    } 
carousal1.style.transform = `translateX(${counter*size}%)`;
},10000);
next1.addEventListener('click',()=>{
    counter++
    if (counter > 4 ) {
        counter = 0;
    }
carousal1.style.transform = `translateX(${counter*size}%)`;
});
prev1.addEventListener('click',()=>{
    counter--;
    if (counter < 1 ) {
        counter = 0;
    }
carousal1.style.transform = `translateX(${counter*size}%)`;
});

button.forEach((b) => {
    b.addEventListener("click",()=>{
        b.style.backgroundColor = '#f5d5d3'
        b.style.fontWeight = 'bold'
        added = '✓  Added to cart'
        b.innerHTML = added;
    })
});
// carousal2

var carousal2 = document.querySelector(".carousal2 .formove"),
    next2 = document.querySelector('.container2 .next2'),
    prev2 = document.querySelector('.container2 .prev2'),
    button2 = document.querySelectorAll(".carousal2 .formove button"),
    counter2 = 0, size2 = -100;
setInterval(()=>{
    counter2++;
    if (counter2 > 4 ) {
        counter2 = 0;
    }
carousal2.style.transform = `translateX(${counter2*size2}%)`;
},10000);
next2.addEventListener('click',()=>{
    counter2++
    if (counter2 > 4  ) {
        counter2 = 0;
    }
carousal2.style.transform = `translateX(${counter2*size2}%)`;
});
prev2.addEventListener('click',()=>{
    counter2--;
if (counter2 < 1 ) {
    counter2 = 0;
}
carousal2.style.transform = `translateX(${counter2*size2}%)`;
});
button2.forEach((b) => {
    b.addEventListener("click",()=>{
        b.style.backgroundColor = '#f5d5d3'
        b.style.fontWeight = 'bold'
        added = '✓  Added to cart'
        b.innerHTML = added;
    })
});
// carousal3

var carousal3 = document.querySelector(".carousal3 .formove"),
    next3 = document.querySelector('.container3 .next3'),
    prev3 = document.querySelector('.container3 .prev3'),
    button3 = document.querySelectorAll(".carousal3 .formove button"),
    counter3 = 0, size3 = -100;
setInterval(()=>{
    counter3++;
    if (counter3 > 4 ) {
        counter3 = 0;
    }
carousal3.style.transform = `translateX(${counter3*size3}%)`;
},10000);
next3.addEventListener('click',()=>{
    counter3++
    if (counter3 > 4  ) {
        counter3 = 0;
    }
carousal3.style.transform = `translateX(${counter3*size3}%)`;
});
prev3.addEventListener('click',()=>{
    counter3--;
if (counter3 < 1 ) {
    counter3 = 0;
}
carousal3.style.transform = `translateX(${counter3*size3}%)`;
});
button3.forEach((b) => {
    b.addEventListener("click",()=>{
        b.style.backgroundColor = '#f5d5d3'
        b.style.fontWeight = 'bold'
        added = '✓  Added to cart'
        b.innerHTML = added;
    })
});
// carousal4

var carousal4 = document.querySelector(".carousal4 .formove"),
    next4 = document.querySelector('.container4 .next4'),
    prev4 = document.querySelector('.container4 .prev4'),
    button4 = document.querySelectorAll(".carousal4 .formove button"),
    counter4 = 0, size4 = -100;
setInterval(()=>{
    counter4++;
    if (counter4 > 4 ) {
        counter4 = 0;
    }
carousal4.style.transform = `translateX(${counter4*size4}%)`;
},10000);
next4.addEventListener('click',()=>{
    counter4++
    if (counter4 > 4  ) {
        counter4 = 0;
    }
carousal4.style.transform = `translateX(${counter4*size4}%)`;
});
prev4.addEventListener('click',()=>{
    counter4--;
if (counter4 < 1 ) {
    counter4 = 0;
}
carousal4.style.transform = `translateX(${counter4*size4}%)`;
});
button4.forEach((b) => {
    b.addEventListener("click",()=>{
        b.style.backgroundColor = '#f5d5d3'
        b.style.fontWeight = 'bold'
        added = '✓  Added to cart'
        b.innerHTML = added;
    })
});


// pagetrans
const pagetrans = document.querySelector('.pagetrans');
const link1 = document.querySelector('.gopage');
link1.addEventListener("click",(e)=>{
        e.preventDefault();
        pagetrans.classList.add('itson');    
        setTimeout(()=>{
            window.location = link1.href;
        },1500)
});

var link = document.querySelectorAll('.all')
link.forEach((l)=>{
    l.addEventListener('click',(i)=>{
        i.preventDefault();
        pagetrans.classList.add('itson');
        setTimeout(()=>{
            window.location = l.href;
        },1500);
    });
});






