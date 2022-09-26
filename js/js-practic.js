const button = document.querySelector('#btn');
const textBlock = document.querySelector('.text_block');


button.addEventListener("click", function(){
    textBlock.classList.toggle('hidden');
    
    if (textBlock.classList.contains('hidden')) {
        button.textContent = "OPEN TEXT";
    } else {
        button.textContent = "CLOSE TEXT";
    }
});