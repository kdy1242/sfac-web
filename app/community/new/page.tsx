'use client'

import { Button, Icon } from "sfac-designkit-react";

export default function Add() {
  return (
    <div className='max-w-6xl mx-auto w-full'>
      
      <div className="flex items-center mt-24">
        <Icon
            name="Hit"
            height={28} /* Size */
            width={28} /* Size */
        /> 
        <span className="ml-2 text-xl font-bold">커뮤니티</span>
      </div>

      <div className="border border-gray-300 rounded-3xl p-2 mt-8">
        <input
          type="text"
          className="border-none outline-none w-full"
          placeholder="게시글 제목을 입력하세요."
        />
      </div>
      
        
      <div className="border border-gray-300 rounded-3xl p-2 mt-4">
        <textarea
          className="border-none outline-none w-full h-[400px]"
          placeholder="게시글 내용을 입력하세요."
        />
      </div>
      <Button
        variant="primary" 
        text="업로드" 
        /* 원하는 코드 추가 가능 */ className="mt-4"
      />
    </div>
  )
}
