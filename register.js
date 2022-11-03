const fullname = document.querySelector('#fullname')
const regisForm = document.querySelector('.register__form')

fullname.addEventListener('change', e => {
    localStorage.setItem("username", e.target.value);
})

const handleRedirect = e => {
    e.preventDefault()
    localStorage.setItem(document.getElementsByName("role")[0].value, `${document.getElementsByName("role")[0].checked}`)
    localStorage.setItem(document.getElementsByName("role")[1].value, `${document.getElementsByName("role")[1].checked}`)
    window.location.href = '/home-login.html'
}

regisForm.addEventListener('submit', handleRedirect)