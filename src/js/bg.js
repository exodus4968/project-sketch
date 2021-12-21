const colors = ["#BAF123", "#FFFF00", "#F7838D", "#9337D0", "#1e78fa"]

const color1 = Math.floor(Math.random()*colors.length)
const color2 = Math.floor(Math.random()*colors.length)

document.body.style.background = `linear-gradient(${colors[color1]}, ${colors[color2]})`