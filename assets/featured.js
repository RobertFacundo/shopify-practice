let currentGroup = 0
const groups = document.querySelectorAll('.featured__products-group')
const prevButton = document.querySelector('.featured__arrow--prev')
const nextButton = document.querySelector('.featured__arrow--next')

function updateGroups () {
  groups.forEach((group, index) => {
    group.classList.toggle('is-active', index === currentGroup)
  })
}

updateGroups()

nextButton.addEventListener('click', () => {
  currentGroup = (currentGroup + 1) % groups.length

  updateGroups()
})

prevButton.addEventListener('click', () => {
  currentGroup = (currentGroup - 1 + groups.length) % groups.length

  updateGroups()
})
