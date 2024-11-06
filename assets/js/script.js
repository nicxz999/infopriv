const pix = document.querySelector('#btnPix')
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('#btnCloseModal')
const btnCopy = document.querySelector('.btnCopy')
const inputPix = document.querySelector(".inputPix")

pix.addEventListener('click', () => {
    modal.style.display = 'flex' 
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none' 
})

btnCopy.addEventListener('click', () => {
    inputPix.select()
    inputPix.setSelectionRange(0, 99999)
    
    try {
      document.execCommand('copy')
    } catch (err) {
      console.error('Erro ao copiar o texto: ', err)
    }
})

const cardTitle = document.querySelector(".cardTitle")
const cardContent = document.querySelector('.cardContent')

cardTitle.addEventListener('click', () => {
  cardContent.classList.toggle('activeCardContent')
})

