import React from 'react'
import { useDispatch } from 'react-redux';
import { sortData, sortDataToDown } from '../../../redux/slices/JewelrySlice';
import { useNavigate } from 'react-router-dom';
import {RiArrowUpSFill, RiArrowDownSFill} from "react-icons/ri";
const MainHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='main-header'>
      <div className='main-header-title'>
            <p>Earrings</p>
            <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div className='sort-links'>
                <ul>
                    <li className='unclickable'>SORT BY:</li>
                    <li onClick={() => {
                      dispatch(sortData({sortBy: "rating"}))
                      navigate("/popularity")
                    }}>Popularity</li>

                    <li onClick={() => {
                      dispatch(sortData({sortBy: "type"}))
                      navigate("/type")
                    }}>Type</li>

                    <li onClick={() => {
                      dispatch(sortData({sortBy: "gemstone"}))
                      navigate("/gemstone")
                    }}>Gemstone</li>

                    <li className='price'>
                      Price 
                      <span className='sort-icons'>
                        <RiArrowUpSFill onClick={() => {
                      dispatch(sortData({sortBy: "price"}))
                      navigate("/price")
                    }} />
                        <RiArrowDownSFill onClick={() => {
                      dispatch(sortDataToDown({sortBy: "price"}))
                      navigate("/price")
                    }} />
                      </span>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default MainHeader
