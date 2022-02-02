/*---==== Open-Close navBar: Start ====---*/
document.querySelectorAll('.open-close').forEach(btn =>{
    btn.addEventListener('click',()=>{
        const navBar = document.querySelector('.nav_bar');
        navBar.classList.toggle('nav_bar-close');
         
        if(navBar.classList.contains('nav_bar-close')){
            document.querySelector('.open_bar-nav').style = 'opacity: 1; pointer-events: unset;';
            document.querySelector('.main').style = 'left: 55px; width: calc(100% - 55px);'
            navBar.style = 'transform: translateX(-100%)';
        }else{
            document.querySelector('.open_bar-nav').style = 'opacity: 0; pointer-events: none;';
            document.querySelector('.main').style = 'left: 230px; width: calc(100% - 230px);'
            navBar.style = 'transform: translateX(0)';
        }
    });
});
/*---==== Open-Close navBar: End ====---*/

/*---==== Dark-Light mode: Start ====---*/
document.querySelector('.mode').addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('dark');
    
    if(document.querySelector('body').className == 'dark'){
        document.querySelector('.sun').style = 'opacity: 1;';
        document.querySelector('.moon').style = 'opacity: 0;';
        document.querySelector('.mode-text').textContent = 'Light Mode';
    }else{
        document.querySelector('.sun').style = 'opacity: 0;';
        document.querySelector('.moon').style = 'opacity: 1;';
        document.querySelector('.mode-text').textContent = 'Dark Mode';
    }
});
/*---==== Dark-Light mode: End ====---*/