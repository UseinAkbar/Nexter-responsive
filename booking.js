const bookingTitle = document.querySelector('.booking__title')
const bookingImg = document.querySelector('.booking__img')
const bookingLocation = document.querySelector('.booking__location')
const bookingRoom = document.querySelector('.booking__rooms')
const bookingLand = document.querySelector('.booking__land')
const bookingPrice = document.querySelector('.booking__price')

bookingImg.src = localStorage.getItem('bookingImg')
bookingTitle.textContent = localStorage.getItem('bookingTitle')
bookingLocation.textContent = localStorage.getItem('bookingLocation')
bookingRoom.textContent = localStorage.getItem('bookingRoom')
bookingLand.innerHTML = localStorage.getItem('bookingLand')
bookingPrice.textContent = localStorage.getItem('bookingPrice')