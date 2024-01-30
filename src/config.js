import location from "./assets/headerImages/location.svg";
import search from "./assets/headerImages/search.svg";
import heart from "./assets/headerImages/heart.svg";
import bag from "./assets/headerImages/bag.svg";
import profile from "./assets/headerImages/profile.svg";
import {AiOutlineHeart} from "react-icons/ai";
import {TiLocation} from "react-icons/ti";
import {BsPerson} from "react-icons/bs";


const CONFIG = {
    headerConfig: {
        location: <TiLocation />,
        jewelry: "JEWELRY",
        releases: "NEW RELEASES",
        gifts: "GIFTS",
        shopName: "APOLLONIAN",
        search,
        heart: <AiOutlineHeart />,
        bag,
        profile: <BsPerson />
    },
}


export default CONFIG;