const categories = document.querySelector('.categories')

const categoriesObserver = new IntersectionObserver(
  entries => {
    const entry = entries[0]

    console.log('isIntersecting:', entry.isIntersecting)
    console.log('intersectionRatio:', entry.intersectionRatio)

    if (entry.isIntersecting) {
      categories.classList.add('is-visible')
    }
  },
  {
    threshold: 0.7
  }
)

categoriesObserver.observe(categories)
