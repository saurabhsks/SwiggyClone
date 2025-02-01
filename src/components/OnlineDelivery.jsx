import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
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
    <div className='max-w-[1200px] mx-auto mb-5'>
        <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'>Restaurants with online food delivery in Ranchi</div>
        </div>
        {/* <div> */}
            <div className='max-w-[1200px] mx-auto hidden md:flex my-4 gap-4 cursor-pointer'>
             <div className='cMBpNp p-3 rounded-md-shadow'>Filter</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>Sort By</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>Fast Delivery</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>New on Swiggy</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>Ratings 4.0+</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>Pure Veg</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>Offers</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>Rs.300-Rs.600</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>Less than Rs.300</div>
             <div className='cMBpNp p-3 rounded-md-shadow'>Special Offers</div>

            </div>
        {/* </div> */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
        {
            data.map(
                (d,i)=>{
                   return <Card {...d} key={i}/>
                }
            )
        }

        </div>
        
    </div>
  )
}
