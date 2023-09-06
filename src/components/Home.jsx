import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from "react-scroll"
import HeroImage from '../assets/heroImage1.jpg'
const Home = () => {
    return (
        <>
            <div name="home" className="h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800">
                <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
                    <div className="flex flex-col justify-center mt-28 h-full">
                        <h2 className="text-4xl sm:text-7xl font-bold text-white ">
                            I'm a Front-End Developer
                        </h2>
                        <p className="text-gray-500 py-4 max-w-md">

                            Experienced (1-2 Years) web developer skilled in HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS. Proficient in Redux and React.js for creating exceptional user interfaces. Expert in Git, GitHub, and Vercel for version control and deployment. Committed to staying up-to-date with the latest web development trends. Currently working at Cinoid Web. Let's collaborate and innovate together! ✨
                        </p>

                        <div>
                            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                                Portfolio
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src="data:image/png;base64,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" alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home