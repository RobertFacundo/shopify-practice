function updateProducts (url) {
  return fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      const products = doc.querySelector('.collection__products')

      const currentProducts = document.querySelector('.collection__products')

      currentProducts.replaceWith(products)
    })
}

function getSectionId () {
  const section = document.querySelector('.collection')
  return section.dataset.sectionId
}

// Pagination
document.addEventListener('click', event => {
  const link = event.target.closest('.collection__pagination a')

  if (!link) return

  event.preventDefault()

  const sectionId = getSectionId()

  const url = `${link.href}&section_id=${sectionId}`

  updateProducts(url).then(() => {
    history.pushState({}, '', link.href)
  })
})

// Back / Forward
window.addEventListener('popstate', () => {
  const sectionId = getSectionId()

  const url = new URL(window.location.href)
  url.searchParams.set('section_id', sectionId)

  updateProducts(url)
})

// Filters
document.addEventListener('change', event => {
  const checkbox = event.target.closest(
    '.collection__filters input[type="checkbox"]'
  )
  if (!checkbox) return

  const checkedCheckboxes = document.querySelectorAll(
    '.collection__filters input[type="checkbox"]:checked'
  )

  const params = new URLSearchParams()

  checkedCheckboxes.forEach(checkbox => {
    if (checkbox.name) {
      params.append(checkbox.name, checkbox.value)
    } else {
      if (checkbox.dataset.min) {
        params.append('filter.v.price.gte', checkbox.dataset.min)
      }

      if (checkbox.dataset.max) {
        params.append('filter.v.price.lte', checkbox.dataset.max)
      }
    }
  })

  const url = new URL(window.location.href)
  url.search = params
  url.searchParams.delete('page')
  url.searchParams.set('section_id', getSectionId())

  const browserUrl = new URL(url)
  browserUrl.searchParams.delete('section_id')

  updateProducts(url).then(() => {
    history.pushState({}, '', browserUrl)
  })
})

//sort
document.addEventListener('change', event => {
  const select = event.target.closest('#SortBy')

  if (!select) return

  const url = new URL(window.location.href)

  url.searchParams.set('sort_by', select.value)
  url.searchParams.delete('page')
  url.searchParams.set('section_id', getSectionId())

  const browserUrl = new URL(url)
  browserUrl.searchParams.delete('section_id')

  updateProducts(url).then(() => {
    history.pushState({}, '', browserUrl)
  })
})
