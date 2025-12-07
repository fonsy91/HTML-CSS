
function apply(property, value, explanation) {
    const grid = document.getElementById("gridBox");
    grid.style[property] = value;

    // Actualizar texto explicativo
    document.getElementById("info").innerText =
        `Propiedad aplicada: ${property}: ${value}\n\n${explanation}`;
}