//cart interception
const form = document.querySelector('.product-form form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(form)

  fetch('/cart/add.js', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)

      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          const cartCounts = document.querySelectorAll('.cart-count')

          cartCounts.forEach(cartCount => {
            cartCount.textContent = cart.item_count

            cartCount.classList.toggle(
              'cart-count--hidden',
              cart.item_count === 0
            )
          })
        })
    })
})
