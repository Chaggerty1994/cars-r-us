import { getColors } from "./database.js";
import { getInteriors } from "./database.js";
import { getTechs } from "./database.js";
import { getWheels } from "./database.js";
import { getOrders } from "./database.js";

const buildOrder = (order) => {

    const colors = getColors()
    const interiors = getInteriors()
    const techs = getTechs()
    const wheels = getWheels()

    const foundColor = colors.find(
        (color) => {
            return color.id == order.colorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id == order.interiorId
        }
    )

    const foundTech = techs.find(
        (tech) => {
            return tech.id == order.technologyId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id == order.wheelsId
        }
    )

    const totalCost = foundColor.price + foundInterior.price + foundTech.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} costs ${costString}`


}


export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrder)

    html += listItems.join("")
    html += "</ul>"

    return html
}