const searchInput = document.querySelector('.search-form__input')
const predictiveSearchContainer = document.querySelector(
  '.predictive-search-container'
)

let debounceTimer

searchInput.addEventListener('input', event => {
  const query = event.target.value

  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(() => {
    fetch(
      window.Shopify.routes.root +
        `search/suggest?q=${query}&resources[type]=product&section_id=predictive-search`
    )
      .then(response => response.text())
      .then(html => {
        predictiveSearchContainer.innerHTML = html
      })
  }, 300)
})

document.addEventListener('click', event => {
  if (!event.target.closest('.search-form')) {
    predictiveSearchContainer.innerHTML = ''
  }
})
