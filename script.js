// NOTE:- % is not working
let str = ""
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            // console.log('inside if');
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = ""
            document.querySelector('input').value = str;
        }
        else if(e.target.innerText == 'Clr'){
            str = str.slice(0,-1);
            document.querySelector('input').value = str;
        }
        else{
            // console.log(e.target);
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
});


// Dark Mode javaScript
let moreBtn = document.getElementById('moreBtn');
let themes = document.getElementById('themes');
moreBtn.addEventListener('click', ()=>{
    if(themes.style.visibility == 'hidden'){
        themes.style.visibility = 'visible';
    }
    else{
        themes.style.visibility = 'hidden';
    }
});


// for dark mode
let darkBtn = document.getElementById('darkBtn');
let calcBody = document.getElementById('calcBody');
let btn = document.querySelectorAll('.btn');

darkBtn.addEventListener('click', ()=>{
    console.log('dark is clicked');
    calcBody.classList.add('calcBodyDark');
    for(let buttons of btn){
        buttons.classList.add('btnDark');
    }

});

// for light mode
let lightBtn = document.getElementById('lightBtn');
lightBtn.addEventListener('click', ()=>{
    console.log('light is clicked');
    calcBody.classList.remove('calcBodyDark');
    for(let buttons of btn){
        buttons.classList.remove('btnDark');
    }
});