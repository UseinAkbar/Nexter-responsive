const homeIcon = document.querySelectorAll('.home__icon');
const iconHeart = document.querySelectorAll('.icon-heart');
const sidebar = document.querySelector('.sidebar');
const sidebarBack = document.querySelector('.sidebar__back');
const closeBtn = document.querySelector('.close-btn');

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
})
