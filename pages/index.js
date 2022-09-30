/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
//import deved from "../public/dev-ed-wave.png";
import ben from '../public/ben-mavi.jpeg';
//import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
//import web3 from "../public/web3.jpg";
//import web4 from "../public/web4.png";
//import web5 from "../public/web5.png";
import web6 from "../public/web6.jpg";

//import { Amplify } from 'aws-amplify';
//import config from './aws-exports';
//Amplify.configure(config);

export default function Home() {

  return (
    <div>
      <Head>
        <title>Ahmet Ruçhan Avcı</title>
        <meta name="description" content="Ahmet Ruçhan Avcı" />
        <link rel="icon" href="/web5.png" />
      </Head>
      <main className=" px-3.5 bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-white">
            <h1 className="font-burtons text-xl text-white" >Created By Avci </h1>
            
            <ul className="flex items-center">
              <li>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-sky-500  to-green-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="Resume.pdf" download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400  to-cyan-400 font-medium md:text-6xl">
              Ahmet Ruçhan Avcı
            </h2>
            <h3 className="text-2xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-orange-500 md:text-3xl">
              Computer Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
            A computer engineer who develops software. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> JavaScript, ReactJS, React Native, VueJs, NodeJS, Python, AI, ML </span> and many more. Join me down below and let's get cracking!
            
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-200">
              <a href="https://twitter.com/AhmetRuchann" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/ahmet-ruchana/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
              <a href="https://github.com/Ahmet-Ruchan" target="_blank" rel="noreferrer"><AiFillGithub/></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={ben} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-3xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">Who am i?</h2>
            <p className="text-md py-2 leading-8 text-gray-200">
            First and foremost, I am a leader and entrepreneur. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">I am also a computer engineer.</span> Still ongoing, throughout my entire learning life.<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300"> I am 21 years old.</span> I have always been and continue to be intertwined with technology and its derivatives. I am open to learning new technologies. 
            
            I thrive creating scalable engineering environments and processes with strong vision and solid fundamentals to enable businesses and fuel innovation. Having a strong academic and commercial research background, I help people navigate through the technology space.
            <br/>
            <br/>
            <h3>
            I also have many open source projects on GitHub and anyone can access and benefit from it. You can look at it by going to the top of the page. And you can also check out my <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300"><a href="https://www.hackerrank.com/Ahmet_Ruch_Avci" target='_blank' rel="noreferrer">HackerRank</a> </span> profile and see my skills and achievements.
            </h3>
            </p>
            
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white flex-1">
              <Image src={design} width={150} height={150} />
              <h3 className="text-lg font-medium pt-8 pb-2  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">VueJs</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">My imagination</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={web6} width={150} height={150} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400  to-cyan-400">
                Code your dream project
              </h3>
              <p className="py-2 ">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400  to-cyan-400">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">VueJs</p>
              <p className="text-gray-800 py-1">HTML and CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={consulting} width={120} height={120} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">Like it?</h3>
              <p className="py-2">
              If you like my work and want to contact me. Please email me.
              </p>
              You can contact me via the <span className="text-lg font-medium pt-8 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">Mail</span> icon below. <br/><br/>
              
              <h1><a href="mailto:aruchanavci01@gmail.com" target='_blank' className="text-9xl  flex justify-center gap-16 py-3 text-yellow-400" rel="noreferrer"><AiFillMail/></a></h1>
              <h3 className="text-lg font-medium pt-8 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">Click on it!</h3>


            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-cyan-300">A little more</h3>
            <p className="text-md py-2 leading-8 text-gray-200">
            I have been using JavaScript and ReactJS lately and continue to improve myself. The technologies I have used so far are:
            <br/>  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-yellow-300"> JavaScript, Java, C, Python, ReactJS, NodeJS, VueJs, HTML and CSS </span>
              
            </p>
            <p className="text-md py-2 leading-8 text-gray-200">
            Don't forget to email me for feedback. Thanks.
            </p>
          </div>
          
          <br/><br/><br/><h5 className="text-m py-1 text-white text-center p-10">Copyright <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400  to-cyan-400">2022 </span>. All rights reserved. ©</h5>
        </section>
      </main>
    </div>
  );
}
