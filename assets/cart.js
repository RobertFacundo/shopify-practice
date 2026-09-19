//cart interactions

function initCartInteractions () {
  initRemoveButtons()
  initQuantityButtons()
}

function changeCartItem (line, quantity) {
  fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      line: Number(line),
      quantity
    })
  })
    .then(response => response.json())
    .then(cart => {
      console.log('CART:', cart)

      renderCart()
    })
}

function initRemoveButtons () {
  const removeButtons = document.querySelectorAll('.cart-item__remove')

  removeButtons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault()

      const line = button.dataset.line

      changeCartItem(line, 0)
    })
  })
}

function renderCart () {
  const cartSection = document.querySelector('.cart-section')
  const sectionId = cartSection.dataset.sectionId
  fetch(`/?sections=${sectionId}`)
    .then(response => response.json())
    .then(data => {
      const html = data[sectionId]

      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      const cartItems = doc.querySelector('.cart-items')
      const cartSummary = doc.querySelector('.cart-summary')

      document.querySelector('.cart-items').replaceWith(cartItems)
      document.querySelector('.cart-summary').replaceWith(cartSummary)

      initCartInteractions()
    })
}

function initQuantityButtons () {
  const quantityButtons = document.querySelectorAll(
    '.cart-item__quantity button'
  )

  quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
      const cartItem = button.closest('.cart-item')
      const line = cartItem.dataset.line
      const input = cartItem.querySelector('input')
      const quantity = Number(input.value)

      const buttons = cartItem.querySelectorAll('.cart-item__quantity button')
      const isPlus = button === buttons[1]

      const newQuantity = isPlus ? quantity + 1 : quantity - 1

      changeCartItem(line, newQuantity)
    })
  })
}

initCartInteractions()
