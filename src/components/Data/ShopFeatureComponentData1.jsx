import { FaArrowAltCircleRight, FaCarAlt } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import CircleIcon from "../CircleIcon/CircleIcon"
export const ShopFeatureComponentData1 = [

    {
        id: 1,
        title: "Free Shipping",
        text: "On all orders over $100",
        divIcon: < CircleIcon icon={FaCarAlt} />
    }
    ,
    {
        id: 2,
        title: " Secure Payment  ",
        text: "100% secure transactions ",
        divIcon: <CircleIcon icon={MdHealthAndSafety} />,
    },
    {
        id: 3,
        title: " Easy Returns ",
        text: "30-day return policy ",
        divIcon: <CircleIcon icon={FaArrowRotateRight} />
    },
    {
        id: 4,
        title: "24/7 Support ",
        text: "Dedicated customer service",
        divIcon: <CircleIcon icon={FaMusic} />

    },
]