import React from "react";

const contact = () => {
  return (
    <div name = 'contact' className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="max-w-screen-lg p-4 mx-auto pt-24 flex flex-col justify-center h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold ">Contact</p>
          <p className="py-6 text-xl">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/972f8e82-dc2d-44fb-ad11-e4c5e9ba778b" method="POST" className="flex flex-col w-full md:w-8/12">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name "
              className="p-2 pl-3 bg-transparent border-2 rounded-md text-white
                     focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your Email"
              className="p-2 pl-3 my-4 bg-transparent border-2 rounded-md text-white
                     focus:outline-none"
            />
            <textarea name="message" placeholder="Type your message here!" className="p-2 pl-3 bg-transparent border-2 rounded-md text-white focus:outline-none" rows="10"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk !</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
