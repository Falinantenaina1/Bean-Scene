/*Menu image */
import cappucino from "../assets/cappucino.png"
import chaiLatte from "../assets/chai-latte.png"
import macchiato from "../assets/macchiato.png"
import expresso from "../assets/expresso.png"


/*Diffencies image */
import coffeeBeans from "../assets/coffee-beans.svg"
import badge from "../assets/badge.svg"
import coffeeCup from "../assets/coffee-cup.svg"
import bestPrice from "../assets/best-price.svg"

export const navigation = [
    {
        id: 1,
        title: "Home",
        url: "#home"
    },
    {
        id: 2,
        title: "Menu",
        url: "#menu"
    },
    {
        id: 3,
        title: "About Us",
        url: "#about"
    },
    {
        id: 4,
        title: "Contact Us",
        url: "#contact"
    }
]

export const menus = [
    {
        id: 1,
        title: "Cappuccino",
        coffee: 50,
        milk: 50,
        price: 8.50,
        img: cappucino
    },
    {
        id: 2,
        title: "Chai Latte",
        coffee: 50,
        milk: 50,
        price: 8.50,
        img: chaiLatte
    },
    {
        id: 3,
        title: "Macchiato",
        coffee: 50,
        milk: 50,
        price: 8.50,
        img: macchiato
    },
    {
        id: 4,
        title: "Expresso",
        coffee: 50,
        milk: 50,
        price: 8.50,
        img: expresso
    }
]

export const differencies = [
    {
        id: 1,
        title: "Supreme Beans",
        text: "Beans that provides great taste",
        img: coffeeBeans
    },
    {
        id: 2,
        title: "High Quality",
        text: "We provide the highest quality",
        img: badge
    },
    {
        id: 3,
        title: "Extraordinary",
        text: "Coffee like you have never tasted",
        img: coffeeCup
    },
    {
        id: 4,
        title: "Affordable Price",
        text: "Our Coffee prices are easy to afford",
        img: bestPrice
    }
    


]