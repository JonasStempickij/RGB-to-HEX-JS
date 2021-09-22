const buttonEl = document.getElementById('button')


const handleClick = () => {
    // Get string from input
    const rgbInputEl = document.getElementById('rgb')
    // Deconstruct string, map array and parseInt 
    const [r, g, b] = rgbInputEl.value.split(',').map(item=> parseInt(item))
    // Convert RGB values to HEX
    const hex = rgbToHex(r,g,b)
    //Create HEX value div
    const hexValue = document.createTextNode(hex)
    const hexDiv = document.createElement('div')
    hexDiv.appendChild(hexValue)
    //Append HEX div
    buttonEl.append(hexDiv)
}

const rgbToHex = (r, g, b) => {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
    
        if (r.length === 1)
        r = '0' + r;
        if (g.length === 1)
        g = '0' + g;
        if (b.length === 1)
        b = '0' + b;
    
        return '#' + r + g + b
}