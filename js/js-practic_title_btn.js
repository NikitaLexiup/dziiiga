const buttonStartLogo = document.querySelector('#start_logo');
const standartLogo = document.querySelector('#standart_logo');
const runLogo = document.querySelector('#run_logo');
const backgroundGrey = document.querySelector('#background_grey');
const scrollBlockBody = document.querySelector('body');
const tagline = document.querySelector('.tagline');
const runLogoBlock = document.querySelector('.run_logo_block');
const btnSize= document.querySelector('.btn_size');


buttonStartLogo.addEventListener("click", function(){
    standartLogo.classList.add('hidden');
    runLogo.classList.toggle('hidden'); 
    backgroundGrey.classList.add('block_hidden_background_grey');  
    buttonStartLogo.classList.add('hidden'); 
    scrollBlockBody.classList.remove('scroll_inpossible'); 
    tagline.classList.remove('hidden');
    runLogoBlock.classList.remove('hidden');
    btnSize.classList.add('hidden');  
});
