function setPad(number) {
    const container = document.querySelector('#container')
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.style.gridTemplateColumns=`repeat(${number}, 1fr)`;
    squareSize = 960 / number;
    for (let i = 0; i < number*number; i++) {
        const i = document.createElement('div');
        i.style.width=`${squareSize}px`;
        i.style.height=`${squareSize}px`;
        i.addEventListener('mouseover', function() {
            i.classList.add("hover-change");
        })
        i.classList.add('square');
        container.appendChild(i);
    }
}

setPad(64);

button = document.querySelector('button');
button.addEventListener('click', () => {
    let newNumber = 64;
    do {
        newNumber = parseInt(prompt('Number of squares per side:', 64));
    } while (isNaN(newNumber) || newNumber <= 0 || newNumber > 100)
    setPad(newNumber);
})

