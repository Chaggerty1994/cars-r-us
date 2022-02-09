import { getWheels } from "./database.js";


const wheels = getWheels()


export const CarWheels = () => {


    let html =  ` 
    <select id="wheels">
        <option value="0">CHOOSE YO MFIN WHEELS</option>`
     
    

    const listItems = wheels.map(wheel => {


        return `
        <option value="${wheel.id}"> ${wheel.color} ${wheel.type} ${wheel.size} </option>
        `
    })

    html += listItems.join("")
    html += `</select>`


    return html
}
