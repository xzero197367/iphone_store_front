export function loadHTML(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html
    })
}

document.addEventListener('DOMContentLoaded', () => {
  loadHTML('root', './home_page/index.html')
})
