import React from "react";

const About = () => {
  return (
   
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a web developer and a undergraduate at Galgotias University, majoring in Computer Sciences. Daily I am learning new things, and developing some amazing projects to showcase them in my portfolio on this website. Moreover, I actively take part in Hackathons and open source events, I'm open for collaborations, or other projects related to my domain. 
        </p>

        <br />

        <p className="text-xl">
        Some of my skills are REACT, JavaScript, Tailwind CSS, BOOTSTRAP, HTML, NODE.JS, MONGODB, MACHINE LEARNING etc. Hope you loved this website which I developed myself using my existing knowledge in Web Development.
        </p>
      </div>
      <br />
    </div>
  );
};

export default About;