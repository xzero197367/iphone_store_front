function getFavorite() {
  return JSON.parse(localStorage.getItem('favorite')) || []
}

function saveFavorite(favorite) {
  localStorage.setItem('favorite', JSON.stringify(favorite))
}

function addToFavorite(product) {
  const favorite = getFavorite()
  const index = favorite.findIndex((item) => item.id === product.id)
  if (index === -1) {
    favorite.push({ ...product })
  }
  saveFavorite(favorite)
}

function displayFavorite() {
  const favorite = getFavorite()
  favorite.forEach((item) => {
    console.log(`${item.name} - ${item.quantity} x $${item.price}`)
  })
}
function updateFavoriteItem(id, quantity) {
  const favorite = getFavorite()
  const index = favorite.findIndex((item) => item.id === id)
  if (index !== -1) {
    if (quantity <= 0) {
      favorite.splice(index, 1) // remove item if quantity is 0
    } else {
      favorite[index].quantity = quantity
    }
    saveFavorite(favorite)
  }
}

function removeFromFavorite(id) {
  const favorite = getFavorite().filter((item) => item.id !== id)
  saveFavorite(favorite)
}

export {
  addToFavorite,
  displayFavorite,
  updateFavoriteItem,
  removeFromFavorite,
  getFavorite,
}
