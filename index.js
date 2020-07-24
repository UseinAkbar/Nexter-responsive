const homeIcon = document.querySelectorAll('.home__icon');
const iconHeart = document.querySelectorAll('.icon-heart');
const sidebar = document.querySelector('.sidebar');
const sidebarBack = document.querySelector('.sidebar__back');
const closeBtn = document.querySelector('.close-btn');
const searchBtn = document.querySelector('.search-btn');
const topbar = document.querySelector('.topbar');
const topbarSearch = document.querySelector('.topbar__search');
const topbarImg = document.querySelector('.topbar__img');
const topbarClose = document.querySelector('.topbar__close');

//TOGGLE LOVE NOTIFICATION
homeIcon.forEach((item, i) => {
  homeIcon[i].addEventListener('click', () => {
    let outlinedUrl = 'src/images/sprite.svg#icon-heart-outlined';
    let heartOutlined = iconHeart[i].getAttribute('xlink:href');

    (heartOutlined === outlinedUrl) ? iconHeart[i].setAttribute('xlink:href', 'src/images/sprite.svg#icon-heart-full') : iconHeart[i].setAttribute('xlink:href', outlinedUrl)
  })
});

//TOGGLE SIDEBAR
document.querySelector('.nav-btn').addEventListener('click', () => {
  //Display The Sidebar
  if (sidebar.classList.length === 1 && sidebarBack.classList.length === 1) {
    sidebar.classList.add('sidebar-click');
    sidebarBack.classList.add('sidebar__back-click');
  }

});

closeBtn.addEventListener('click', () => {
  //Hide The Sidebar
  if (sidebar.classList.length !== 1 && sidebarBack.classList.length !== 1) {
    sidebar.classList.remove('sidebar-click');
    sidebarBack.classList.remove('sidebar__back-click');
  }
});

sidebarBack.addEventListener('click', () => {
  if (sidebar.classList.length !== 1) {
    sidebar.classList.remove('sidebar-click');
    sidebarBack.classList.remove('sidebar__back-click');
  }
});

//DISPLAY THE SEARCH INPUT
searchBtn.addEventListener('click', () => {
  if (topbarSearch.classList.length === 1) {
    topbarClose.style.display = 'inline-block';
    topbar.classList.add('displayInput');
    topbarImg.style.display = 'none';
    searchBtn.classList.add('close');
    topbarSearch.classList.add('display');
  }
});

topbarClose.addEventListener('click', () => {
  if (topbar.classList.length !== 1) {
    topbarClose.style.display = 'none';
    topbarSearch.classList.remove('display');
    topbar.classList.remove('displayInput');
    topbarImg.style.display = 'inline-block';
    searchBtn.classList.remove('close');
  }
})
