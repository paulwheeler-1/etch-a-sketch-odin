function setupGrid() {
    const container = document.querySelector('.container')
    if (document.querySelector('.cardContainer')){
        container.removeChild(document.querySelector('.cardContainer'))
    }

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('cardContainer')
    container.appendChild(cardContainer)

    gridSize=prompt('Input dimension of Etch-a-Sketch Grid')
    console.log(gridSize)
    quikMafs = (100 / gridSize) - gridSize
    quikGaps =  (100 / gridSize)
    console.log('quick ' + quikMafs)

    cardContainer.style['gap'] = `${quikGaps}`
    //add functionality to create AxA grid based on user input
    


    for (let i = 0; i < (gridSize * gridSize); i++) {
        let div = document.createElement('div')
        div.classList.add('card')
        div.setAttribute('id',i)
        div.style['height'] = `${quikMafs}%`
        div.style['width'] = `${quikMafs}%`
        cardContainer.appendChild(div)
        div.addEventListener('mouseover', sketch)
    }


}

function sketch(e) {
    //const box = document.querySelector(`#${e.target.id}`)
    console.log(e.target)
    e.target.classList.add('black')
}










//const cards = Array.from(document.querySelectorAll('.card'))
//cards.forEach(card => card.addEventListener('mouseover',sketch))


