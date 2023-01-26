import React from "react";
import connect4 from "../assets/portfolio/connect4.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import dice from "../assets/portfolio/dice_SS.jpg";
import encrypt from "../assets/portfolio/encrypt.jpg";
import gg from"../assets/portfolio/Guessing Game.jpg";
import simon from "../assets/portfolio/simon game pic.jpg";
import sicCalci from "../assets/portfolio/scientific calculator.jpg"
//import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
//import installNode from "../assets/portfolio/installNode.jpg";
//import navbar from "../assets/portfolio/navbar.jpg";
//import reactParallax from "../assets/portfolio/reactParallax.jpg";
//import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
//import reactWeather from "../assets/portfolio/reactWeather.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: connect4,
    desc:<p>CONNECT FOUR GAME</p>,
     handleClick(){
        let demo='https://priiyaa.github.io/DAY-5/'
        const newWindow = window.open(demo, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null

      },
     
      openInNewTab () {
        let url='https://tailwindcss.com/docs/responsive-design'
      const newWindow=  window.open(url, '_blank', 'noreferrer');
        if (newWindow) newWindow.opener = null
      }

    },
    {
      id: 2,
      src: calculator,

      desc:<p>SIMPLE CALCULATOR</p>,

      handleClick(){
        let demo='https://tailwindcss.com/docs/responsive-design'
        const newWindow = window.open(demo, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null

      },
     
      openInNewTab () {
        let url='https://github.com/Priiyaa/calculator/tree/master'
      const newWindow=  window.open(url, '_blank', 'noreferrer');
        if (newWindow) newWindow.opener = null
      }
    },
    {
      id: 3,
      src: dice,
      desc:<p>DICE GAME</p>,

      handleClick(){
        let demo='https://priiyaa.github.io/Dice-Game/'
        const newWindow = window.open(demo, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null

      },
     
      openInNewTab () {
        let url='https://tailwindcss.com/docs/responsive-design'
      const newWindow=  window.open(url, '_blank', 'noreferrer');
        if (newWindow) newWindow.opener = null
      }
    },
    {
      id: 4,
      src: encrypt,
      desc:<p>Caesar Cipher</p>,

      handleClick(){
        let demo='https://priiyaa.github.io/DAY-4/'
        const newWindow = window.open(demo, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null

      },
     //NEEDS GITHUB REPO Link
      openInNewTab () {
        let url='https://priiyaa.github.io/DAY-4/'
      const newWindow=  window.open(url, '_blank', 'noreferrer');
        if (newWindow) newWindow.opener = null
      }
    },
    {
      id: 5,
      src: gg,
      desc:<p>NUMBER GUESSING GAME</p>,

      handleClick(){
        let demo='https://tailwindcss.com/docs/responsive-design'
        const newWindow = window.open(demo, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null

      },
     
      openInNewTab () {
        let url='https://github.com/Priiyaa/guessing-game/tree/master'
      const newWindow=  window.open(url, '_blank', 'noreferrer');
        if (newWindow) newWindow.opener = null
      }
    },
    {
      id: 6,
      src: simon,

      desc:<p>SIMON GAME</p>,

      handleClick(){
        let demo='https://priiyaa.github.io/Simon-Game/'
        const newWindow = window.open(demo, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null

      },
     
      openInNewTab () {
        let url='https://tailwindcss.com/docs/responsive-design'
      const newWindow=  window.open(url, '_blank', 'noreferrer');
        if (newWindow) newWindow.opener = null
      }
    },
    {
        id: 7,
        src: sicCalci,
        desc:<p>SCIENTIFIC CALCULATOR</p>,

        handleClick(){
          let demo='https://tailwindcss.com/docs/responsive-design'
          const newWindow = window.open(demo, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  
        },
       
        openInNewTab () {
          let url='https://github.com/Priiyaa/calculator'
        const newWindow=  window.open(url, '_blank', 'noreferrer');
          if (newWindow) newWindow.opener = null
        }
      },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:max-h-screen"
    >
        <br />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,handleClick,openInNewTab,desc}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
             <b>  <p className="items-center justify-center text-center text-lg pt-5 ">{desc}</p></b> 
              <div className="flex items-center justify-center">
                <button onClick={handleClick}   className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    target="_blank"
                    rel="noreferrer">
                  Demo 
              
                </button>
                <button onClick={openInNewTab} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;