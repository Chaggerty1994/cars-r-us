
import { CarColors } from "./colors.js"


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
                
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
               
            </section>
            <section class="choices__wheels options">
            <h2>Wheels</h2>
            
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
            
        </article>

        <article class="customOrders">
            <h2>Custom Orders</h2>
            
        </article>
    `
}