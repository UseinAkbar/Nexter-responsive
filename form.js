const radio = document.querySelectorAll('.register__radio')
const registerJumbotron = document.querySelectorAll('.register__jumbotron')

const handleRegisJumbotron = (index) => {
    registerJumbotron[index].classList.add('displayed')

    registerJumbotron.forEach((item, i) => {
        if(i !== index) item.classList.remove('displayed')
    })
}

radio.forEach((item, i) => {
    item.addEventListener('change', e => {
        handleRegisJumbotron(i)
        console.log(e.target);
    })
})