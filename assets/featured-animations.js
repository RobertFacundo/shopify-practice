const featured = document.querySelector('.featured')

const featuredObserver = new IntersectionObserver(
  entries => {
    const entry = entries[0]

    if (entry.isIntersecting) {
      featured.classList.add('is-visible')
    }
  },
  {
    threshold: 0.7
  }
)

featuredObserver.observe(featured)
