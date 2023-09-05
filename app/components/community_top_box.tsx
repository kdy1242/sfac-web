'use client'

import {Breadcrumb} from "sfac-designkit-react";

export default function CommunityTopBox() {
  return (
    <div className="relative">
      <img src="/community-bg.svg" alt="Community" className="w-full h-auto" />
      <div className='max-w-6xl mx-auto'>
        <div className="absolute top-[76px]">
          <Breadcrumb menu={["교육과정", "교육과정"]} />
          <p className='text-4xl font-bold leading-normal mt-5'>
            커뮤니티
          </p>
          <p className='text-xl leading-normal mt-5'>
            궁금한 것이나 이야기하고 싶은 것은
            <br/>
            언제든지 이곳에서 즐겁게 나누어봐요!
          </p>
        </div>
        <a href='/community/new' className="absolute top-4 right-4">add</a>
      </div>
    </div>
  )
}
