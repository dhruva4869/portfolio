"use client";
import {BsFillMoonStarsFill, BsBrightnessHigh} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import { useState } from 'react';


export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [isClick, setIsClick] = useState(0);

  function handleCount () {
    setIsClick(isClick + 1);
  }

  const DarkMode = () => {
    setIsDark(!isDark);
  };

  return (

    <div className={isDark ? "dark" : ""}>
    <main className='bg-white px-10 dark:bg-slate-900'>
      
      <section className="min-h-screen">

        <nav className='py-10 mb-12 flex justify-between'>

          <button onClick={handleCount} className='text-xl font-serif text-emerald-500'>Hello There 👋.<br></br>Waved {isClick} times </button>

          <ul className='flex items-center'>
            <li className='dark:bg-gradient-radial from-yellow-400 to-yellow-200 rounded-xl'>
              {!isDark ? <BsFillMoonStarsFill onClick={DarkMode} className='cursor-pointer text-2xl'/> : <BsBrightnessHigh onClick={DarkMode} className='cursor-pointer text-2xl text'/>}
            </li>

            <li>
              <a className='bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-2 rounded-lg ml-8' href="https://www.linkedin.com/in/dhruva-upadhyaya-94681726b/" target='_blank'>Resume</a>
            </li>

          </ul>

        </nav>

        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-cyan-700 font-medium dark:text-cyan-400 md:text-6xl font-serif">Dhruva Prasad Upadhyaya 🎯</h2>
          <h3 className="text-2xl py-2 text-violet-700 font-mono dark:text-violet-400">Developer, Problem solver and Learner 📑</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-blue-100 max-w-xl mx-auto md:text-xl">
            Join me below and  embark on a collaborative endeavor 🤝. Together, we shall commence our work.<br></br>
            My Work is top-notch, and I expect it to remain that way
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href='https://twitter.com' target='_blank' className='cursor-pointer hover:text-blue-500'><AiFillTwitterCircle /></a>
          <a href='https://linkedin.com' target='_blank' className='cursor-pointer hover:text-sky-700'><AiFillLinkedin/></a>
          <a href='https://github.com' target='_blank' className='cursor-pointer hover:text-black'><AiFillGithub/></a>
          <a href='https://reddit.com' target='_blank' className='cursor-pointer hover:text-orange-600'><AiFillRedditCircle/></a>
        </div>


        <div className="mx-auto relative mt-20 md:h-96 md:w-96">
          <Image src="/unnamed.png" layout="fill" objectFit="cover" />
        </div>
      </section>


      <section>

        <div className='text-center'>

          <h3 className="text-3xl py-1 dark:text-blue-200 font-serif ">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            Ever since I have started coding, I have helped several
            <span className="text-violet-500"> agencies </span> like 
            <span className='text-pink-400'> COMPANY1.... </span>
            in various fields like <span className="text-violet-500">encryption, communication, development </span>
            and <span className='text-teal-400'> Artificial Intelligence and Machine Learning </span>
            and collaborated with talanted colleagues and mentors to create advanced products, helping all.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            I offer a wide range of services, from brand designing to programming, building applications and problem solving.
          </p>
        </div>

        <div className="lg:flex gap-10">
            <div className="text-center shadow-lg shadow-pink-400 p-10 rounded-xl my-10  dark:text-emerald-400  dark:bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:shadow-indigo-600 flex-1">
              <Image src="/welcome.png" width={120} height={130} className='mx-auto'/>
              <h3 className="text-2xl pt-8 pb-2 font-burtons hover:font-serif hover:text-rose-600 ">
                Beautiful Designs
              </h3>
              <p className="py-2 font-thin font-sans hover:font-serif">
                Creating elegant designs depending on your needs
              </p>
              <h4 className="py-4 text-slate-400 font-serif hover:text-pink-600">Technologies I use for designing</h4>
              <div className="text-center shadow-lg shadow-cyan-500 p-10 rounded-xl my-10  dark:bg-white flex-1 flex items-center">
                <Image src="/tailwind.png" width={80} height={80} className='mx-auto hover:bg-teal-100 p-1 rounded-lg cursor-pointer' />
                <Image src="/css.png" width={80} height={80} className="mx-auto hover:bg-blue-300 p-1 rounded-lg cursor-pointer" />
              </div>
              <div className="text-center shadow-lg shadow-purple-500 p-10 rounded-xl my-10 dark:bg-white flex-1 flex items-center">
                <Image src="/Bootstrap_logo.png" width={80} height={80} className='mx-auto hover:bg-purple-300 p-1 rounded-lg cursor-pointer' />
                <Image src="/Adobe_Photoshop.png" width={80} height={80} className="mx-auto p-1 hover:bg-slate-500 rounded-lg cursor-pointer" />
              </div>
              
            </div>
            <div className='text-center shadow-lg shadow-violet-600 p-10 rounded-xl my-10 dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 flex-1'>
              <Image src="/Codeicon.png" width={100} height={130} className='mx-auto'/>
              <h3 className='text-2xl pt-8 pb-2 font-burtons hover:font-serif hover:text-indigo-600'>Clean Code</h3>
              <p className='py-2 font-thin font-sans hover:font-serif'>I excel in writing clean code in various languages</p>
              <h4 className='py-2 font-serif text-green-300 hover:text-fuchsia-500'>I specialize in the following: </h4>
              <div className='text-center shadow-lg shadow-yellow-300 p-6 rounded-xl my-6 dark:bg-white flex-1 flex items-center'>
                <Image src="/Python-logo.png" width={60} height={60} className='mx-auto hover:bg-gradient-to-t from-blue-400 to-yellow-400 p-1 rounded-lg cursor-pointer' />
                <Image src="/JavaScript-logo (1).png" width={60} height={60} className='mx-auto hover:bg-yellow-400 p-1 rounded-lg cursor-pointer' />
              </div>
              <div className='text-center shadow-lg shadow-sky-700 p-6 rounded-xl my-6 dark:bg-white flex-1 flex items-center'>
              <Image src="/ISO_C++_Logo.png" width={60} height={60} className='mx-auto hover:bg-gradient-to-br from-sky-700 to-blue-300 p-1 rounded-lg cursor-pointer' />
              <Image src="/1200px-C.png" width={60} height={60} className='mx-auto hover:bg-gradient-to-br from-sky-700 to-blue-300 p-1 p rounded-lg cursor-pointer' />
              </div>
              <div className='text-center shadow-lg shadow-orange-400 p-6 rounded-xl my-6 dark:bg-white flex-1 flex items-center'>
                <Image src="/Java.png" width={60} height={60} className='mx-auto hover:bg-gradient-to-t from-orange-300 to-cyan-300 p-1 p rounded-lg cursor-pointer' />
                <Image src="/OCaml.png" width={100} height={60} className='mx-auto hover:bg-gradient-to-b from-black to-orange-400 p-1 p rounded-lg cursor-pointer' />
              </div>
              
            </div>

            <div className="text-center shadow-lg shadow-pink-400 p-10 rounded-xl my-10  dark:bg-white dark:text-emerald-400  dark:bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:shadow-indigo-600 flex-1">
              <Image src="/pngaaa.com-3851081.png" width={110} height={110} className='mx-auto bg-transparent my-1'/>
              <h3 className="text-2xl pt-8 pb-2 font-burtons hover:font-serif hover:text-rose-600">
                Handy Skills
              </h3>
              <p className="py-2 font-thin font-sans hover:font-serif">
                Extra Skills mandatory for any developer
              </p>
              <h4 className="py-4 text-slate-400 font-serif hover:text-pink-600">Extra Skills I have for develepment</h4>
              <div className="text-center shadow-lg shadow-orange-500 p-10 rounded-xl my-10  dark:bg-white flex-1 flex items-center">
                <Image src="/html-5.png" width={80} height={80} className='mx-auto hover:bg-orange-300 p-1 rounded-lg cursor-pointer' />
                <Image src="/React-icon.svg.png" width={80} height={80} className='mx-auto hover:bg-cyan-100 p-1 rounded-lg cursor-pointer' />
              </div>
              <div className="text-center shadow-lg shadow-teal-900 p-10 rounded-xl my-10 dark:bg-white flex-1 flex items-center">
                <Image src="/Django.png" width={80} height={80} className="mx-auto hover:bg-green-500 p-1 rounded-lg cursor-pointer" />
                
                <Image src="/unnamed (1).png" width={80} height={80} className="mx-auto p-1 hover:bg-slate-500 rounded-lg cursor-pointer" />
              </div>
              
            </div>


          </div>
        </section>
        <section className="py-10 text-center">
          <div>
            <h3 className="text-3xl py-1 dark:text-orange-600 font-serif ">More about me 😎</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I love coding and solving intruiging Problems that make me think. The feeling of solving
              a problem is second to none and I would love to solve more problems, making everyone's lives easier.<br></br>
              I also have a huge interest in <span className='text-red-600'>Aritificial Intelligence</span> and 
              <span className='text-red-600'> Machine Learning</span> <br></br>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Apart from Coding, I also like playing
              <span className="text-teal-500"> football ⚽ </span>, listening to music 🎶
              and watching <span className="text-teal-500">Mystery-Murder</span> series. I love communicating with different people
              , and consider that one of my biggest strengths. <br></br>
              I will always give my best to whatever work I am doing, ranging from <span className='text-orange-500'>development </span> 
              to <span className="text-green-400">Machine-Learning</span> algorithms
              
            </p>
          </div>
      </section>

      <section className="py-10 text-center">
          <div>
            <h3 className="text-3xl py-1 dark:text-violet-500 font-serif ">My Works ✅</h3>
            <h4 className='text-md text-center py-1 text-rose-500 font-mono font'> This are some of the projects I've worked on <span className='text-teal-500'>(click for github repository)</span></h4>

            <div className='lg:flex gap-10'>
              
              <div className='text-center shadow-lg shadow-orange-400 p-10 rounded-xl my-10 dark:bg-white flex-1 flex items-center bg-gradient-to-r from-emerald-500 to-indigo-800 cursor-pointer'>
                <a href='https://github.com/dhruva4869/movie-finder' target='_blank' rel='noopener noreferrer'>
                  <Image src="/movieFinder.png" width={400} height={500} className='w-full h-full object-cover rounded-xl'/>
                </a>
              </div>

              <div className='text-center shadow-lg shadow-indigo-700 p-10 rounded-xl my-10 dark:bg-white flex-1 flex items-center bg-gradient-to-r from-zinc-600 to-violet-800 cursor-pointer'>
                  <Image src="/chat-main.png" width={400} height={500} className='w-full h-full object-cover rounded-xl '/>
              </div>

              <div className='text-center shadow-lg shadow-yellow-400 p-10 rounded-xl my-10 dark:bg-white flex-1 flex items-center bg-gradient-to-tr from-blue-500 to-indigo-800 cursor-pointer'>
                  <a href='https://github.com/dhruva4869/bmi-gen' target='_blank' rel='noopener noreferrer'>
                    <Image src="/bmi-calc.png" width={400} height={500} className='w-full h-full object-cover rounded-xl' />
                  </a>
              </div>

            </div>

            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg shadow-purple-800  p-10 rounded-xl my-10 dark:bg-white flex-1 flex items-center bg-gradient-to-r from-teal-600 to-green-500 cursor-pointer'>
                <a href='https://github.com/dhruva4869/blogs' target='_blank' rel='noopener noreferrer'>
                  <Image src="/blog.png" width={400} height={500} className='w-full h-full object-cover rounded-xl' />
                </a>
              </div>

              <div className='text-center shadow-lg shadow-teal-600 p-10 rounded-xl my-10 dark:bg-white flex-1 flex items-center bg-gradient-to-r from-teal-400 to-blue-700 cursor-pointer'>
                <Image src="/grocery.png" width={400} height={500} className='w-full h-full object-cover rounded-xl' />
              </div>


              <div className='text-center shadow-lg shadow-rose-400 p-10 rounded-xl my-10 dark:bg-white flex-1 flex items-center bg-gradient-to-r from-purple-500 to-cyan-800 cursor-pointer'>
                  <Image src="/sss.png" width={400} height={500} className='w-full h-full object-cover rounded-xl' />
              </div>

            </div>
            
          </div>
      </section>

      <section className='py-10 text-center'>

        <div className="p-3 md:p-10 my-10 shadow-xl shadow-pink-600 text-amber-600 font-serif rounded-lg dark:bg-gradient-to-r from-teal-200 to-lime-200 dark:shadow-emerald-500">
          You can contact me via Linkedin: <a href="https://www.linkedin.com/in/dhruva-upadhyaya-94681726b/" target='_blank' className='text-indigo-600'> Here </a>
          <br></br><span className='text-amber-400'>I look forward to wroking with you in the Future. </span>
        </div>


      </section>


    </main>
    </div>

  )
}
