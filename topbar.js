const username = localStorage.getItem("username");

document.querySelector('.topbar__logged').addEventListener('click', function() {
    this.classList.toggle('clicked')
    document.querySelector('.topbar__dropdown').classList.toggle('drop')
    document.querySelector('.topbar__option').classList.toggle('drop')
})

document.querySelector('.topbar__logout').addEventListener('click', () => {
    window.location.href = '/index.html'
})

document.querySelector('.topbar__user').textContent = username

// if(localStorage.getItem(localStorage.getItem('realtor'))) {
//     document.querySelector('.topbar__role').innerHTML = '<a href="/admin.html">Realtor View<a/>'
// } else {
//     document.querySelector('.topbar__role').innerHTML = '<li>Dashboard<li/>'
// }