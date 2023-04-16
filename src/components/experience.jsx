import React from "react";
import Cassandra from "../assests/cassandra.png";
import Css from "../assests/css.png";
import Hadoop from "../assests/hadoop.png";
import Html from "../assests/html.png";
import Java from "../assests/java.png";
import Js from "../assests/js.png";
import Python from "../assests/python.png";
import ReactLogo from "../assests/react.png";
import MongoDb from "../assests/mongodb.png";
import Go from "../assests/go.png";
import C from "../assests/c.png";
import Aws from "../assests/aws.png";
import Figma from "../assests/figma.png";
import Gits from "../assests/git.png";
import Android from "../assests/android.png";

const experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: Js,
      title: "JavaScript",
      style: "shadow-amber-300",
    },
    {
      id: 4,
      src: Python,
      title: "PYTHON",
      style: "shadow-emerald-700",
    },
    {
      id: 5,
      src: ReactLogo,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: MongoDb,
      title: "MONGODB",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: Java,
      title: "JAVA",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: Hadoop,
      title: "HADOOP",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: Cassandra,
      title: "CASSANDRA",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: Aws,
      title: "AWS",
      style: "shadow-amber-300",
    },
    {
      id: 11,
      src: C,
      title: "C#",
      style: "shadow-violet-500 ",
    },
    {
      id: 12,
      src: Figma,
      title: "Figma",
      style: "shadow-pink-500",
    },
    {
      id: 13,
      src: Gits,
      title: "Git",
      style: "shadow-red-700",
    },
    {
      id: 14,
      src: Go,
      title: "GO",
      style: "shadow-cyan-500",
    },
    {
      id: 15,
      src: Android,
      title: "Android",
      style: "shadow-green-700",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full "
    >
      <div className="max-w-screen-lg p-4 mx-auto pt-72 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8"> 
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6 text-xl">These are some of the technologies i have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({id,src,title,style})=>(     //we are using paranthesis coz we are returing jsx

          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default experience;
