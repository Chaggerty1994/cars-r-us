import { getColors, setColor } from "./database.js";

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)


export const CarColors = () => {

    let html =  ` 
    <select id="color">
        <option value="0">CHOOSE YO MFIN COLOR</option>`
     
    

    const listItems = colors.map(color => {
        return `
        <option value="${color.id}"> ${color.color} </option>
        `
    })

    html += listItems.join("")
    html += `</select>`


    return html

}