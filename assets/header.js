const menuButton = document.querySelector('.header-mobile__menu')
const navigation = document.querySelector('.header-mobile__navigation')

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open')

    menuButton.setAttribute('aria-expanded', isOpen)
  })
}
