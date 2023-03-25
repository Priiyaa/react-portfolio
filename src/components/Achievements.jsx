import React from "react";
import award from "../assets/award.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Achievements = () => {
  return (
    <div
      name="Achievements"
      className=" w-full bg-gradient-to-b from-black via-gray-900 to-black "
    > 
      <div className="max-w-screen-lg mx-auto flex flex-col  h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl px-4 sm:text-4xl font-bold inline border-b-4 border-gray-500 text-white">
          Achievements
          </h2>
          <p className="text-white px-4 pt-4">

           I love to participate in various Hackathons and Open source programs. Some of my achievements that I am proud of are:
            
            <div className="mt-5">

            <h1 className="text-white text-3xl sm:text-1xl">Hackathons</h1>
            <br/>

            <li><b>Electrothn 4.0 - International Level Hackathon :</b> <br/><u>Won </u>Natural disaster management Catagory</li>
            <br/>
            
            <li>  <b> HackNSUT - Netaji Subhas University of Technology (NSUT),2022:</b><br/>
          Was listed under <u>top 10 teams</u></li><br/>
          
          <li>  <b> Dexterix 3.0 - Galgotias University,2022:</b><br/>
          Was listed under <u>top 50 </u>teams out of 300+ teams</li><br/>

          <li>  <b> SheBuilds - 2023</b></li>
          <br/>
            <h1 className="text-white text-3xl sm:text-1xl">Open Source</h1>
          
            <li> Successful participation in JWoC ( JGEC Winter of Code) 2022 
            with <b>4+ merged pull request</b> on GitHub</li><br/>
          
               
            </div>
          </p>
         

        
        </div>
        

       
      </div>
    </div>
  );
};

export default Achievements;