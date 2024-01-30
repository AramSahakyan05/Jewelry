import { createSlice } from "@reduxjs/toolkit";
import earing1 from "../../assets/jewelryImages/earing1.png"
import earing2 from "../../assets/jewelryImages/earing2.png";
import earing3 from "../../assets/jewelryImages/earing3.png";
import earing4 from "../../assets/jewelryImages/earing4.png";
import earing5 from "../../assets/jewelryImages/earing5.png";
import earing6 from "../../assets/jewelryImages/earing6.png";
import earing7 from "../../assets/jewelryImages/earing7.png";
import earing8 from "../../assets/jewelryImages/earing8.png";

const initialState = {
    jewelryData: [
        {
            id: 1,
            image: earing1,
            name: "DIAMOND STUDS",
            price: 200,
            type: 5.4,
            rating: 544,
            gemstone: false
        },
        {
            id: 2,
            image: earing2,
            name: "MINI HOOPS",
            price: 90,
            type: 2.4,
            rating: 789,
            gemstone: true
        },
        {
            id: 3,
            image: earing3,
            name: "DANGLING LEAVES",
            price: 60,
            type: 1.2,
            rating: 2150,
            gemstone: true
        },
        {
            id: 4,
            image: earing4,
            name: "LEAF STUDS",
            price: 40,
            type: .49,
            rating: 90,
            gemstone: false
        },
        {
            id: 5,
            image: earing5,
            name: "CHAIN DROPS",
            price: 40,
            type: 6.1,
            rating: 7000,
            gemstone: true
        },
        {
            id: 6,
            image: earing6,
            name: "STAR BUNDLE STUDS",
            price: 100,
            type: 2.9,
            rating: 875,
            gemstone: false
        },
        {
            id: 7,
            image: earing7,
            name: "SPHERICAL DROPS",
            price: 150,
            type: 17.4,
            rating: 5400,
            gemstone: false
        },
        {
            id: 8,
            image: earing8,
            name: "CHAINED STUDS",
            price: 100,
            type: 7.8,
            rating: 800,
            gemstone: true
        },
    ],
    sortedJewelryData: []
};
const JewelrySlice = createSlice({
    name: "jewelryData",
    initialState,
    reducers: {
        sortData: (state, {payload}) => {
           state.sortedJewelryData = state.jewelryData.sort((a,b) => {
                if(a[payload.sortBy] > b[payload.sortBy]) {
                    return 1;
                } else if(a[payload.sortBy] < b[payload.sortBy]) {
                    return -1;
                } else {
                    return 0;
                }
            })
        },
        sortDataToDown: (state, {payload}) => {
            state.sortedJewelryData = state.jewelryData.sort((a, b) => {
                if(a[payload.sortBy] < b[payload.sortBy]) {
                    return 1
                } else if(a[payload.sortBy] > b[payload.sortBy]) {
                    return -1;
                } else {
                    return 0;
                }
            })
        }
    }
})
export default JewelrySlice.reducer;
export const {sortData, sortDataToDown} = JewelrySlice.actions;
