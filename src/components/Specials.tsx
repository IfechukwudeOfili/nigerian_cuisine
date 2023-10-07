import Cart from "./Cart";
import jollof from "../assets/Jollof.jpeg";
import bitter from "../assets/bitterLeaf.jpg";
import nkwobi from "../assets/nkwobi.jpeg";
import pap from "../assets/papAkara.jpeg";
import cat from "../assets/catFish.jpg";
import suya from "../assets/suya.png";


interface SpecialCardprops{
    name:string;
    url: string;
    price: string;
}

function SpecialCard({name, url, price}: SpecialCardprops){
    
    return(
        <div className="specialsCard">
            <div className="specialsCardImg">
                <img src={url} alt={"Image of"+name} />
            </div>
            <div className="specialsCardText">
                <h1>{name}</h1>
                <p>A flavorful West African classic, {name} is a vibrant one-pot dish that combines aromatic rice, tomatoes, peppers, and spices</p>
            </div>
            <div className="specialsCardPriceline">
                <p>${price}</p>
                <Cart />
            </div>
        </div>
    )
}
const specialsDishes = [
    {
        name: "Nigerian Jollof Rice",
        url: jollof,
        price: "20"
    },
    {
        name: "Bitter Leaf Soup with Pounded Yam",
        url: bitter,
        price: "20"
    },{
        name: "Nkwobi",
        url: nkwobi,
        price: "20"
    },{
        name: "Pap and Akara",
        url: pap,
        price: "30"
    },{
        name: "Cat Fish Pepper soup",
        url: cat,
        price: "30"
    },{
        name: "Suya",
        url: suya,
        price: "30"
    }
]
export default function Specials(){
    const leftFilteredSpecials = specialsDishes.filter((dish) => parseFloat(dish.price) > 20);
    const rightFilteredSpecials = specialsDishes.filter((dish) => parseFloat(dish.price) == 20);

    return(
       <div id="specials">
        <h1 className="specialsTitle">Chef's Specials</h1>
        <p className="specialsDescription">
        Meet Chef Dami, our culinary virtuoso with a passion for crafting extraordinary specials. With an artful blend of tradition and innovation, Chef Dami creates captivating dishes that redefine the essence of Nigerian cuisine.
        </p>
        <div id="specialsCardsContainer">
            <div className="leftSpecialsCards">
            {leftFilteredSpecials.map((dish, index) => (
          <SpecialCard key={index} name={dish.name} url={dish.url} price={dish.price} />
        ))}
            </div>
            <div className="rightSpecialsCards">
            {rightFilteredSpecials.map((dish, index) => (
          <SpecialCard key={index} name={dish.name} url={dish.url} price={dish.price} />
        ))}
            </div>
        </div>
       </div>
    )
}