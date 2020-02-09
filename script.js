const $btnEntrar = document.querySelector('[data-btn="entrar"]');
const $form  = document.querySelector('form');
const $body = document.querySelector('body'); 

$btnEntrar.addEventListener('click', e => {
    e.preventDefault();

    $form.classList.add('form-hide');

});

$form.addEventListener('animationstart', e => {
    
    if(e.animationName === 'down') {
        $body.style.overflow = 'hidden';
    }
})

$form.addEventListener('animationend', e => {
    if(e.animationName === 'down') {
        $form.style.display = 'none'
        $body.style.overflow = 'none';
    }
})