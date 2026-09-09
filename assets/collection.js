document.addEventListener('click', event => {
  const link = event.target.closest('.collection__pagination a')

  if (!link) return

  event.preventDefault()

  const section = document.querySelector('.collection')
  const sectionId = section.dataset.sectionId

  const url = `${link.href}&section_id=${sectionId}`

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      const products = doc.querySelector('.collection__products')

      const currentProducts = document.querySelector('.collection__products')

      currentProducts.replaceWith(products)

      history.pushState({}, '', link.href)
    })
})

window.addEventListener('popstate', () => {
  const section = document.querySelector('.collection')
  const sectionId = section.dataset.sectionId

  const url = `${window.location.href}&section_id=${sectionId}`
  console.log(window.location.href)
  console.log(url)

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      const products = doc.querySelector('.collection__products')

      const currentProducts = document.querySelector('.collection__products')

      currentProducts.replaceWith(products)
    })
})
