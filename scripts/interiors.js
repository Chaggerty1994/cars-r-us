import { getInteriors } from "./database.js";


const interiors = getInteriors()

export const CarInteriors = () => {

    let html =  ` 
    <select id="interior">
        <option value="0">CHOOSE YO MFIN INTERIOR</option>`
     
    

    const listItems = interiors.map(interior => {
        return `
        <option value="${interior.id}"> ${interior.color} ${interior.type} </option>
        `
    })

    html += listItems.join("")
    html += `</select>`


    return html
}