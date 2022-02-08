

const database = {
    colors: [
        {id: 1, color: "Silver", price: 600},
        {id: 2, color: "Midnight-Blue", price: 600 },
        {id: 3, color: "FireBrick-Red" , price: 800 },
        {id: 4, color:  "Spring-Green", price: 800 }
    ],

    interior: [
        {id: 1, color: "Beige", type: "fabric", price: 1000},
        {id: 1, color: "Charcoal", type: "fabric", price: 1000},
        {id: 1, color: "White", type: "leather", price: 2000},
        {id: 1, color: "Black", type: "leather", price: 2000},
    ],

    technology: [
        {id: 1, package: "Basic", price: 1000},
        {id: 2, package: "Navigation", price: 2000},
        {id: 3, package: "Visibility", price: 3000},
        {id: 4, package: "Ultra", price: 4000},
    ],

    wheels: [
        {id: 1, size: 17, type: "Radial",},
        {id: 2, size: 17, type: "Radial", color: "Black"},
        {id: 3, size: 18, type: "Spoke", color: "Silver"},
        {id: 4, size: 18, type: "Spoke", color: "Black"}
    ],

    customOrders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1,

        }
    ]
}