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
            src: Uber,
            href:"https://github.com/RishiTi7/uber-clone",
        },
        {
            id:2,
            title:"Ecommerce website",
            src: Ecommerce,
            href:"https://github.com/RishiTi7/MAC-e-commerce-site",
        },
        {
            id:3,
            title:"Snapchat Clone",
            src: Snapchat,
            href:"https://github.com/RishiTi7/snapchat-clone-js",
        },
        {
            id:4,
            title:"AI Chatbot",
            src: Chatbot,
            href:"https://github.com/RishiTi7/Ai-Chatbot-",
        },
        {
            id:5,
            title:"YT video time Bookmarker",
            src: youtube,
            href:"https://github.com/RishiTi7/youtube-bookmarker-chrome-extenstion",
        },
        {
            id:6,
            title:"Perlin noise Terrain",
            src: Perlin,
            href:"https://github.com/RishiTi7/perlin-noise-flying-mountains",
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 text-xl'>Checkout some of my works here</p>
                <p className='text-sm'>Please note: Demo is currently unavailable</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 max-w-4xl'>
            {portfolios.map(({id,title,src,href})=>(

                <div key={id}className='shadow-md shadow-blue-500 rounded-lg'>
                    <p className="flex justify-center mb-2 text-base">{title}</p>
                    <img src={src} alt="" className='rounded-md duration-200 w-29 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href={href}><button className='w-1/2 px-6 py-3 mt-5 duration-200 hover:scale-105'>Code</button></a>
                        <button className='w-1/2 px-6 py-3 mt-5 '>Demo</button>
                    </div>
                </div>
            ))}
            </div>


        </div>
    </div>
  )
}

export default portfolio