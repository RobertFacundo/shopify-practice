//gallery-image
const thumbnails = document.querySelectorAll('.product-gallery__thumbnail')
const mainImage = document.querySelector('.product-gallery__main-image img')

console.log(mainImage)

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imageUrl = thumbnail.dataset.imageUrl

    mainImage.src = imageUrl
    mainImage.srcset = ''
  })
})

//product-tab
const tabs = document.querySelectorAll('.product-tabs__navigation button')
const contents = document.querySelectorAll('.product-tabs__content > div')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.dataset.tab

    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    contents.forEach(content => {
      content.classList.remove('active')
    })

    tab.classList.add('active')

    const content = document.querySelector(`[data-content="${tabName}"]`)

    content.classList.add('active')
  })
})
