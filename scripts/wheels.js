import { getWheels, setWheels } from "./database.js";


const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const CarWheels = () => {


    let html =  ` 
    <select id="wheels">
        <option value="0">CHOOSE YO MFIN WHEELS</option>`
     
    

    const listItems = wheels.map(wheel => {

        if (wheel.color) {
        return `
        <option value="${wheel.id}"> ${wheel.color} ${wheel.type} ${wheel.size} </option>
        ` } else {
            
            return `<option value="${wheel.id}"> ${wheel.type} ${wheel.size} </option>`

        }
    })

    html += listItems.join("")
    html += `</select>`


    return html
}
