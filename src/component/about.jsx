import {  Typography } from "@mui/material";
import { FaBookBookmark } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import My_card from "./card";
import { useContext } from "react";
import { api } from "../App";

const About = () => {
   const articles=[
        {
            title:'About Me',
            icon:<FaBookBookmark/>,
            text:"I'm a front-end developer who designs attractive and fast websites using React, Tailwind CSS, and Framer Motion. I aim to create seamless and comfortable user experiences.",
            ms:'0'
       
        },
        {
            title:'How Start',
            icon:<FaBrain/>,
            text:'When I knew that I could develop myself through the Internet, I chose programming to learn. I learned for a while on my own, but without a plan. This is what made me join a front-end development course. Now I have the foundation and I build on it something new every day. I am not satisfied with the course alone.'
            , ms:'auto !important'
        },
        {
            title:'My Aim',
            icon:<MdComputer/>,
            text:"I develop myself every day to become a world-class freelance developer, able to provide innovative software solutions, and generate a steady income that helps me build my future with confidence."
             , ms:'0'
        }, {
            title: 'What Drives Me',
            icon: <IoSettingsOutline />,
            text: "I believe in consistency, curiosity, and purpose. I don’t just learn to code—I learn to solve problems, create value, and build tools that matter. I enjoy challenges and always aim to grow beyond my limits.",
            ms: 'auto !important'       
        },
    ]
    const context=useContext(api)
    return (
        <div className="w-100" ref={context.refabout}>
            <Typography variant="h4" sx={{ textAlign: 'center', my: 4 }}>About</Typography>
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 grid-rows-1 gap-5">
                    {articles.map(ele=>(
                        <My_card key={ele.title} icon={ele.icon} text={ele.text} title={ele.title} ms={ele.ms}/>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default About