document.addEventListener('DOMContentLoaded', e => {
    const colorContainer = document.getElementById('color-container');

    let offsetX, offsetY, isDragging = false;

    colorContainer.addEventListener('mousedown', e => {
        e.preventDefault()
        isDragging = true
        offsetX = e.clientX - colorContainer.offsetLeft
        offsetY = e.clientY - colorContainer.offsetTop
        colorContainer.style.cursor = 'grabbing'

    })

        colorContainer.addEventListener('mousemove', e=> {
        if (isDragging) {
            e.preventDefault()
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            colorContainer.style.left = `${x}px`;
            colorContainer.style.top = `${y}px`;
        }
    })
    colorContainer.addEventListener('mouseup', e => {
        isDragging = false
        colorContainer.style.cursor = 'grab'
    })

});


