const albums = document.querySelectorAll('.album')


function active() {
  this.classList.toggle('ativo')
}

albums.forEach((item) => {
  item.addEventListener('click', active)
})

