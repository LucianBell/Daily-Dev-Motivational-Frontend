import React from 'react'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import { SiLinktree } from 'react-icons/si'
import QuoteSection from './components/QuoteSection'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AppRoot () {
  return (
    <>
      <div className="">
        <div className=" mb-10">
          <h3 className=" text-3xl text-gray-400">Welcome to...</h3>
          <h1 className=' text-6xl my-5'>Daily Dev Motivational</h1>
          <div className=" w-80 h-2 bg-violet-800"></div>
        </div>

        <QuoteSection/>
        <hr className=' my-8'/>

        <div>
          <h3 className=' text-xl'>Application created by:</h3>
          <h2 className=' text-3xl my-2'>Lucian Fernando Bellini</h2>
          <div className=" w-72 h-2 bg-violet-800"></div>
          <h3 className=' text-xl my-3'>Get in contact with me ;D</h3>
          <div>
            <ul className=' flex text-3xl items-center'>
              <li>
                <a href="https://github.com/LucianBell" rel='noreferrer' target='_blank'>
                <FaGithubSquare/>
                </a>
              </li>
              <li className=' mx-2'>
                <a href="https://www.linkedin.com/in/lucianbellini/" rel='noreferrer' target='_blank'>
                <FaLinkedin/>
                </a>
              </li>
              <li className=' mr-2'>
                <a href="https://www.instagram.com/lucianf.bellini/" rel='noreferrer' target='_blank'>
                <FaInstagramSquare/>
                </a>
              </li>
              <li className=' text-2xl'>
                <a href="https://linktr.ee/lucianbellini" rel='noreferrer' target='_blank'>
                <SiLinktree/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
