import { RoadBike1, RoadBike2, RoadBike3, Helmet1, Helmet2, Helmet3, MountainBike } from "./images"
import { Bicycle, Cart, Profile, Map, Orders, Plus, Minus, ChevronLeft, ChevronRight, Road, Mountain, Accessories, SelectedAccessories, SelectedBattery, SelectedRoad, SelectedMountain, Search, Heart, Electric, Battery } from "./icons"
export const TABS = [
    {
        id: '1',
        name: 'Home',
        icon: Bicycle,
        screen: '/'
    },
    {
        id: '2',
        name: 'Map',
        icon: Map,
        screen: '/map'
    },
    {
        id: '3',
        name: 'Cart',
        icon: Cart,
        screen: '/cart'
    },
    {
        id: '4',
        name: 'Profile',
        icon: Profile,
        screen: '/profile'
    },
    {
        id: '5',
        name: 'Orders',
        icon: Orders,
        screen: '/orders'
    }
]

export const PRODUCTS = [
    {
        id: '1',
        name: 'PEUGEOT - LR01',
        category: 'Road Bike',
        description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
        image: RoadBike2,
        price: 1999.99
    },
    {
        id: '3',
        name: 'HONDA - HB02',
        category: 'Helmet',
        description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
        image: Helmet1,
        price: 99
    },
    {
        id: '10',
        name: 'PEUGEOT - LR02',
        category: 'Road Bike',
        description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
        image: RoadBike3,
        price: 1999.99
    },
    {
        id: '11',
        name: 'HONDA - HB01',
        category: 'Mountain Bike',
        description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
        image: MountainBike,
        price: 1999.99
    },
    {
        id: '2',
        name: 'HONDA - HB01',
        category: 'Mountain Bike',
        description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
        image: MountainBike,
        price: 1999.99
    },
    {
        id: '8',
        name: 'PEUGEOT - LR01',
        category: 'Road Bike',
        description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
        image: RoadBike2,
        price: 1999.99
    },
    {
        id: '5',
        name: 'HONDA - HB04',
        category: 'Helmet',
        description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
        image: Helmet1,
        price: 120
    },
    {
        id: '7',
        name: 'PEUGEOT - LR02',
        category: 'Road Bike',
        description: "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
        image: RoadBike3,
        price: 1999.99
    },
]

export const CATEGORIES = [
    {
        id: '0',
        name: 'Electric',
        icon: Battery,
        selectedIcon: SelectedBattery
    },
    {
        id: '1',
        name: 'Road Bike',
        icon: Road,
        selectedIcon: SelectedRoad
    },
    {
        id: '2',
        name: 'Mountain Bike',
        icon: Mountain,
        selectedIcon: SelectedMountain
    },
    {
        id: '3',
        name: 'Helmet',
        icon: Accessories,
        selectedIcon: SelectedAccessories
    }
]

export const COUPONS = [
    {
        id: '3242',
        code: 'BIKE',
        discount: 30
    }
]

