let emailInput = ''
const loginForm = document.querySelector('.login__form')

const data = [
    {
        email: 'joko@gmail.com',
        username: 'Joko Anwar'
    },
    {
        email: 'useinakbar01@gmail.com',
        username: 'Usein'
    }
]


const handleFilterUsername = value => {
    const filtered = data.filter(item => {
        return item.email === value
    })

    if(filtered.length) {
        const {username} = filtered[0]
        localStorage.setItem('username', username)
    } else {
        localStorage.setItem('username', 'John Doe')
    }

}

const handleRedirect = e => {
    e.preventDefault()
    handleFilterUsername(emailInput)
    window.location.href = '/home-login.html'
}

document.querySelector('.login__email').addEventListener('change', e => {
    emailInput = e.target.value
})

loginForm.addEventListener('submit', handleRedirect)