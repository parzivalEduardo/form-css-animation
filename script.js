const $btnEntrar = document.querySelector('[data-btn="entrar"]');
const $form  = document.querySelector('form');
const $body = document.querySelector('body'); 

$btnEntrar.addEventListener('click', e => {
    e.preventDefault();

    const fields = [...document.querySelectorAll('.input-block input')]

    fields.forEach( field => {

        if(field.value === '') $form.classList.add('validate-error');
    })

    const formError = document.querySelector('.validate-error')

    if(formError) {
        formError.addEventListener('animationend', e => {

            if(e.animationName === 'nono'){
                formError.classList.remove('validate-error')
            }
        })
    }
    else{
        $form.classList.add('form-hide');
    }

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