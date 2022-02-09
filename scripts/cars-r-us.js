
import { CarColors } from "./colors.js"
import { CarInteriors } from "./interiors.js"
import { carTechs } from "./technology.js"
import { CarWheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
        
    }
)


export const CarsRUs = () => {
    return `
        <h1>Cars R us</h1>

        <article class="choices">
            <section class="choices__color options">
                <h2>Colors</h2>
                ${CarColors()}
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${CarInteriors()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
               ${carTechs()}
            </section>
            <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${CarWheels()}
        </section>
        </article>

        <article>
            <h2></h2>
            <button id="orderButton">Create A MFIN Custom Order</button>
            
        </article>

        <article class="customOrders">
            <h2>Custom Orders</h2>
            ${Orders()}
        </article>
    `
}