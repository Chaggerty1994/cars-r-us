

const database = {
    colors: [
        {id: 1, color: "Silver", price: 600},
        {id: 2, color: "Midnight-Blue", price: 600 },
        {id: 3, color: "FireBrick-Red" , price: 800 },
        {id: 4, color:  "Spring-Green", price: 800 }
    ],

    interiors: [
        {id: 1, color: "Beige", type: "fabric", price: 1000},
        {id: 2, color: "Charcoal", type: "fabric", price: 1000},
        {id: 3, color: "White", type: "leather", price: 2000},
        {id: 4, color: "Black", type: "leather", price: 2000},
    ],

    technologies: [
        {id: 1, package: "Basic", price: 1000},
        {id: 2, package: "Navigation", price: 2000},
        {id: 3, package: "Visibility", price: 3000},
        {id: 4, package: "Ultra", price: 4000},
    ],

    wheels: [
        {id: 1, size: 17, type: "Radial", price: 10000},
        {id: 2, size: 17, type: "Radial", color: "Black", price: 20000},
        {id: 3, size: 18, type: "Spoke", color: "Silver", price: 15000},
        {id: 4, size: 18, type: "Spoke", color: "Black", price: 20000}
    ],

    customOrders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1,

        },
    ],

    orderBuilder: {

    },
}


export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechs = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setTech = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}


export const addCustomOrder = () => {
    // copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // add a timestamp
    newOrder.timestamp = Date.now()

    // add the new order object to custom orders tate
    database.customOrders.push(newOrder)

    // reset the temporary state for user choices
    database.orderBuilder = {}

    // broadcast a notification that a permanent state change has been made

document.dispatchEvent(new CustomEvent("stateChanged"))



}