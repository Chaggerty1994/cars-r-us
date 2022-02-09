import { getTechs } from "./database.js";


const techs = getTechs()


export const carTechs = () => {

    let html =  ` 
    <select id="tech">
        <option value="0">CHOOSE YO MFIN Tech</option>`
     
    

    const listItems = techs.map(tech => {
        return `
        <option value="${tech.id}"> ${tech.package} </option>
        `
    })

    html += listItems.join("")
    html += `</select>`


    return html
}