const modalBtn = document.querySelectorAll('.home__btn')
const modalTitle = document.querySelector('.modal-title')
const houseImg = document.querySelector('.house__img')
const houseLocation = document.querySelector('.house__location')
const houseRoom = document.querySelector('.house__rooms')
const houseLand = document.querySelector('.house__land')
const housePrice = document.querySelector('.house__price')
const progressBar = document.querySelector('.progress-bar')
const textRecommend = document.querySelector('.house__text-recommend')
const houses = ['Beautiful Family House', 'Modern Glass Villa', 'Cozy Country House', 'Large Rustical Villa', 'Majestic Palace House', 'Modern Family Apartment']

let houseData = [
    {
        tipe: 'Beautiful Family House',
        bar: 50,
        spec: ['USA', '5 rooms', 325, '1,200,00']
    },
    {
        tipe: 'Modern Glass Villa',
        bar: 70,
        spec: ['Canada', '6 rooms', 450, '2,750,00']
    },
    {
        tipe: 'Cozy Country House',
        bar: 75,
        spec: ['UK', '4 rooms', 250, '875,000']
    },
    {
        tipe: 'Large Rustical Villa',
        bar: 80,
        spec: ['Spain', '5 rooms', 480, '1,950,00']
    },
    {
        tipe: 'Majestic Palace House',
        bar: 40,
        spec: ['Germany', '7 rooms', 650, '4,500,00']
    },
    {
        tipe: 'Modern Family Apartment',
        bar: 90,
        spec: ['France', '3 rooms', 180, '650,000']
    }
]

const handleStorage = index => {
    localStorage.setItem('bookingImg', `src/images/house-${index+1}.jpeg`)
    localStorage.setItem('bookingTitle', houseData[index].tipe)
    localStorage.setItem('bookingLocation', houseData[index].spec[0])
    localStorage.setItem('bookingRoom', houseData[index].spec[1])
    localStorage.setItem('bookingLand', `${houseData[index].spec[2]}<sup>2</sup>`)
    localStorage.setItem('bookingPrice', `$${houseData[index].spec[3]}`)

    console.log(houseData[index].spec[0]);
}

const handleDetailModal = index => {
    houseImg.src = `src/images/house-${index+1}.jpeg`
    modalTitle.textContent = houseData[index].tipe
    houseLocation.textContent = houseData[index].spec[0]
    houseRoom.textContent = houseData[index].spec[1]
    houseLand.innerHTML = `${houseData[index].spec[2]}<sup>2</sup>`
    housePrice.textContent = `$${houseData[index].spec[3]}`
    progressBar.textContent = `${houseData[index].bar}%`
    progressBar.setAttribute('aria-valuenow', `${houseData[index].bar}`)
    progressBar.style.width = `${houseData[index].bar}%`
    textRecommend.textContent = `${houseData[index].bar}% users recommend this for you`
}

modalBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        handleDetailModal(i)
        handleStorage(i)
    })
})


document.querySelector('.house-btn-book').addEventListener('click', () => {
    if(location.pathname == '/' || window.location.href.includes('index')) {
        window.location.href = '/login.html'
    } else {
        window.location.href = '/booking.html'
    }
})