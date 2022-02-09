import { getTechs, setTech } from "./database.js";


const techs = getTechs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)


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