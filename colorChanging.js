async function getColors(amount=2) {
    const res = await fetch(`https://random-flat-colors.vercel.app/api/random?count=${amount}`)
    const json = await res.json()
    return json.colors
}

const changeColor = async () => {
    const titleElement = document.querySelector('.title')
    const buttonElement = document.querySelector('.color-changer')
    const fourColors = await getColors(4)

    
    
    document.body.style.backgroundColor = await fourColors[0]
    titleElement.style.color = await fourColors[1]
    buttonElement.style.backgroundColor = await fourColors[2]
    buttonElement.style.color = await fourColors[3]
    displayHex(fourColors)
    return fourColors
}

const displayHex = (colorsList) => {
    const colorContainer = document.querySelector('.color-container')
    const colorOne = document.getElementById('color-one')
    const colorTwo = document.getElementById('color-two')
    const colorThree = document.getElementById('color-three')
    const colorFour = document.getElementById('color-four')
    
    let i = 0
    colors = [colorOne, colorTwo, colorThree, colorFour]
    
    colors.forEach(element => {
        element.innerHTML = colorsList[i]
        element.style.color = colorsList[i]
        i++
    })
}

document.addEventListener('DOMContentLoaded', changeColor())