import React from 'react'
import Chatbot from "../assests/chatbot.png"
import Uber from "../assests/uber.png"
import Snapchat from "../assests/snapchat.png"
import youtube from "../assests/yt.png"
import Ecommerce from "../assests/ecommerce.png"
import Perlin from "../assests/perlin.png"

const portfolio = () => {


    const portfolios = [
        {
            id:1,
            title:"Uber Clone",
            src: Uber
        },
        {
            id:2,
            title:"Ecommerce website",
            src: Ecommerce,
        },
        {
            id:3,
            title:"Snapchat Clone",
            src: Snapchat
        },
        {
            id:4,
            title:"AI Chatbot",
            src: Chatbot
        },
        {
            id:5,
            title:"YTBookmarker",
            src: youtube
        },
        {
            id:6,
            title:"Perlin noise Terrain",
            src: Perlin
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 text-xl'>Checkout some of my works here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 w-11/12'>
            {portfolios.map(({id,title,src})=>(

                <div key={id}className='shadow-md shadow-gray-600 rounded-lg'>
                    <p className="ml-20 mb-2">{title}</p>
                    <img src={src} alt="" className='rounded-md duration-200 w-29 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 mt-5 duration-200 hover:scale-105'>Code</button>
                        <button className='w-1/2 px-6 py-3 mt-5 duration-200 hover:scale-105'>Demo</button>
                    </div>
                </div>
            ))}
            </div>


        </div>
    </div>
  )
}

export default portfolio