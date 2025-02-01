import React ,{useState,useEffect} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from './Card';

export default function TopRest() {
    const [data, setData]=useState([]);
    const [slide, setSlide]=useState(0);

    const fetchTopRestaurant = async () =>{
            try {
                // const response = await fetch("http://localhost:5000/top-restaurant-chains");
                const response = await fetch("https://swiggyapis-ctp4.onrender.com/top-restaurant-chains");
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

        const nextSlide = () =>{
            console.log("clicked")
            console.log(categories.length);
            if(categories.length - 8 == slide) return false;
            setSlide(slide+3);
        }
    
        const prevSlide = () =>{
            if(slide == 0) return false;
            setSlide(slide-3);
        }

  return (
    <div className='max-w-[1200px] mx-auto mb-5'>
    <div className='flex my-5 items-center justify-between'>
    <div className='text-[25px] font-bold'>Top Restaurant in Jodhpur</div>
    <div className='flex'>
        <div className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
          rounded-full mx-2' >
            <FaArrowLeft onClick={prevSlide}/>
          </div>
          <div className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
          rounded-full mx-2'>
            <FaArrowRight onClick={nextSlide}/>
          </div>
    </div>

    </div>
    <div className='flex gap-5 overflow-hidden'>
    {
        data.map(
            (d,i) =>{
                return <div className='' style={{
                        transform: `translateX(-${slide*100}%)`
                    }}><Card width="w-full md:w-[273px]" {...d} key={i}/> </div>
            }
        )
    }        
    </div>
    <hr className="my-6 border-[0.5px]" />

    </div>

  )
}
