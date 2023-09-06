'use client'

import { Icon } from "sfac-designkit-react";

export default function Community() {
  return (
    <>
      <div className='max-w-6xl mx-auto w-full'>
        <div className="flex items-center mt-24">
          <Icon
              name="Hit"
              height={28} /* Size */
              width={28} /* Size */
          /> 
          <span className="ml-2 text-xl font-bold">커뮤니티</span>
        </div>
      </div>
    </>
  )
}
