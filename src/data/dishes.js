import greekSalad from "@/assets/images/greek-salad.jpg";
import bruschetta from "@/assets/images/bruschetta.jpg";
import lemonDessert from "@/assets/images/lemon-dessert.jpg";

const dishesMenu = [
  {
    id: 1,
    title: "Greek Salad",
    img: greekSalad,
    price: 12.99,
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    title: "Bruschetta",
    img: bruschetta,
    price: 5.99,
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    img: lemonDessert,
    price: 5.0,
    desc: "This comes straight from grandma's recipe book, every last ingredients has been sourced and is as authentic as can be imagined.",
  },
];

export default dishesMenu;
