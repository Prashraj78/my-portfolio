import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          👋 Hello there! I'm Prashant, a skilled web developer with a passion for crafting exceptional user Interfaces. 🚀

          💻 My journey in web development has led me to master HTML, CSS, and JavaScript, and I'm fluent in frameworks like Bootstrap and Chakra UI. The power of Redux and React.js fuels my creations, allowing me to seamlessly bring ideas to life.

          🛠️ Beyond coding, I've honed my expertise with GitHub, Git, and Vercel to ensure smooth version control and deployment. With VS Code as my trusty companion and Postman for API testing, I thrive in collaborative environments, fostering productivity and effective communication on platforms like Slack.

          📚 Staying ahead in the dynamic world of web development is my mantra. I continually embrace new technologies, exploring trends that redefine user interactions and design aesthetics.

          🔍 My proficiency and dedication position me as the perfect fit for top-ranking roles, where innovation meets impact.

          Let's connect, collaborate, and create something extraordinary together! ✨
        </p>
      </div>
    </div> 
  );
};


export default About;
