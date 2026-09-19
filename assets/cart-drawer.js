console.log('cart-drawer.js loaded')

function initCartDrawer () {
  initCloseButton()
  initRemoveButtons()
  initQuantityButtons()
}

function renderCartDrawer () {
  console.log('Intentando pedir section cart-drawer...')

  return fetch('/cart?section_id=cart-drawer')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      const newCartDrawer = doc.querySelector('.cart-drawer')
      const cartDrawer = document.querySelector('.cart-drawer')

      const wasOpen = cartDrawer.classList.contains('active')

      cartDrawer.replaceWith(newCartDrawer)

      if (wasOpen) {
        newCartDrawer.classList.add('active')
      }

      initCartDrawer()
    })
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

      renderCartDrawer()
    })
}

function initCloseButton () {
  const closeButton = document.querySelector('.cart-drawer-close')

  closeButton.addEventListener('click', () => {
    closeCartDrawer()
  })
}

function closeCartDrawer () {
  const cartDrawer = document.querySelector('.cart-drawer')

  cartDrawer.classList.remove('active')
}

function initRemoveButtons () {
  const removeButtons = document.querySelectorAll('.cart-drawer-item__remove')

  removeButtons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault()

      const line = button.dataset.line

      changeCartItem(line, 0)
    })
  })
}

function initQuantityButtons () {
  const quantityButtons = document.querySelectorAll(
    '.cart-drawer-item__quantity button'
  )

  quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
      const cartItem = button.closest('.cart-drawer-item')
      const line = cartItem.dataset.line

      const input = cartItem.querySelector('input')
      const quantity = Number(input.value)

      const buttons = cartItem.querySelectorAll(
        '.cart-drawer-item__quantity button'
      )

      const isPlus = button === buttons[1]

      const newQuantity = isPlus ? quantity + 1 : quantity - 1

      changeCartItem(line, newQuantity)
    })
  })
}

initCartDrawer()
