import img1 from "../../../public/images/product1.jpg";
import img2 from "../../../public/images/product2.jpg";
import img3 from "../../../public/images/product3.jpg";
import img4 from "../../../public/images/product4.jpg";
import img5 from "../../../public/images/product14.jpg";
import img6 from "../../../public/images/d6.jpg";
import img7 from "../../../public/images/d7.jpg";
import img8 from "../../../public/images/d8.jpg";
import img9 from "../../../public/images/product9.jpg";
import img10 from "../../../public/images/product10.jpg";
import img11 from "../../../public/images/product13.jpg";
import img12 from "../../../public/images/product12.jpg";

export const ProductsData = [
  {
    id: 1,
    img: img1,
    name: "product1",
    price: 555,
    categor: "outerwear",
    date: "2024-01-01",
  },
  {
    id: 2,
    img: img2,
    name: "product2",
    price: 565,
    categor: "accessories",
    date: "2024-01-01",
  },
  {
    id: 3,
    img: img3,
    name: "product3",
    price: 155,
    categor: "knitwear",
    date: "2024-01-01",
  },
  {
    id: 4,
    img: img4,
    name: "product4",
    price: 85,
    categor: "accessories",
    date: "2024-01-01",
  },
  {
    id: 5,
    img: img5,
    name: "product5",
    price: 555,
    categor: "shoes",
    date: "2024-01-01",
  },
  {
    id: 6,
    img: img6,
    name: "product6",
    price: 565,
    categor: "knitwear",
    date: "2024-01-01",
  },
  {
    id: 7,
    img: img7,
    name: "product7",
    price: 155,
    categor: "shoes",
    date: "2024-01-01",
  },
  {
    id: 8,
    img: img8,
    name: "product8",
    price: 85,
    categor: "knitwear",
    date: "2024-01-01",
  },
  {
    id: 9,
    img: img9,
    name: "product9",
    price: 85,
    categor: "outerwear",
    date: "2024-01-01",
  },
  {
    id: 10,
    img: img10,
    name: "product10",
    price: 85,
    categor: "outerwear",
    date: "2024-01-01",
  },
  {
    id: 11,
    img: img11,
    name: "product11",
    price: 85,
    categor: "bags",
    date: "2024-01-01",
  },
  {
    id: 12,
    img: img12,
    name: "product12",
    price: 85,
    categor: "bags",
    date: "2024-01-01",
  },
];
localStorage.setItem("all-products", JSON.stringify(ProductsData));
// ✅ نحفظ البيانات مرة واحدة فقط
const storedProducts = localStorage.getItem("all-products");

if (!storedProducts) {
  localStorage.setItem("all-products", JSON.stringify(ProductsData));
}
