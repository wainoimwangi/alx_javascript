#!/usr/bin/node

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);

    const par = document.createElement('p');
    par.textContent = 'Welcome Holberton!';
    document.body.appendChild(par);

    const spookyB = document.createElement('button');
    spookyB.textContent = 'Spooky';
    spookyB.addEventListener('click', spooky);
    document.body.appendChild(spookyB);

    const dark = document.createElement('button');
    dark.textContent = 'Dark Mode';
    dark.addEventListener('click', darkMode);
    document.body.appendChild(dark);

    const scream = document.createElement('button');
    scream.textContent = 'Scream Mode';
    scream.addEventListener('click', screamMode);
    document.body.appendChild(scream);
}

main();