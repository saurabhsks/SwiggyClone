import React ,{useState,useEffect} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from './Card';

export default function TopRest() {
    const [data, setData]=useState([]);

    const fetchTopRestaurant = async () =>{
            try {
                const response = await fetch("http://localhost:5000/top-restaurant-chains");
                console.log("fetched toprest")
                const apidata = await response.json();
                setData(apidata);
            } catch (error) {
                console.log("some error in top rest")
                console.error('Fetch error:', error);
            }
        }
    
        useEffect(
            () => {
                fetchTopRestaurant();
            },[]
        )

  return (
    // <div className='flex'>
    //   {
    //     data.map(
    //         (cat,index) =>{
    //             return (
    //                 <div
                      
    //                 key={index} className='flex w-[150px] shrink-0 duration-500'>
    //                     <img src={"http://localhost:5000/images/" + cat.image} alt="" />
    //                 </div>
    //             )
    //         }
    //     )
    //  }

    // </div>
 <div className='max-w-[1200px] mx-auto mb-5'>
    <div className='flex my-5 items-center justify-between'>
    <div className='text-[25px] font-bold'>Top Restaurant in Jodhpur</div>
    <div className='flex'>
        <div className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
          rounded-full mx-2' >
            <FaArrowLeft />
          </div>
          <div className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
          rounded-full mx-2'>
            <FaArrowRight />
          </div>
    </div>

    </div>
    <div className='flex gap-5 overflow-hidden'>
    {
        data.map(
            (d,i) =>{
                return <Card {...d} key={i}/>
            }
        )
    }
        {/* <Card/> */}
        
    </div>

    </div>

  )
}
