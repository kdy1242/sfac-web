import Image from 'next/image'
import {currentUser} from "@clerk/nextjs";
import { Tab } from 'sfac-designkit-react';
import MainTab from './components/tab';

export default async function Home() {

  return (
    <>
      <div className='h-[535px] bg-blue-500 p-24'>
        <div className='max-w-6xl mx-auto'>

        <p className='text-white text-4xl font-bold leading-normal'>
          대기업도 선택한 플러터?
          <br/>
          지금 시작하고 개발자 가보자고
        </p>
        <p className='text-white text-xl leading-normal mt-5'>
          파격 혜택받고
          <br/>
          플러터 부트캠프 3기 참여하기
        </p>
        <div className="flex justify-between mx-auto mt-32 gap-8">
          <div className="w-72 h-72 bg-white/80 shadow-lg rounded-md backdrop-blur-lg flex flex-col items-center justify-center text-center">
            <img src="/img-1.svg" className="mr-4" /><br/>
            혜택 1.<br/>
            가장 먼저 수료생을<br/>
            만나보실 수 있습니다.
          </div>
          <div className="w-72 h-72 bg-white/80 shadow-lg rounded-md backdrop-blur-lg flex flex-col items-center justify-center text-center">
            <img src="/img-2.svg" className="mr-4" /><br/>
            혜택 2.<br/>
            가장 먼저 수료생을<br/>
            만나보실 수 있습니다.
          </div>
          <div className="w-72 h-72 bg-white/80 shadow-lg rounded-md backdrop-blur-lg flex flex-col items-center justify-center text-center">
            <img src="/img-3.svg" className="mr-4" /><br/>
            혜택 3.<br/>
            가장 먼저 수료생을<br/>
            만나보실 수 있습니다.
          </div>
          <div className="w-72 h-72 bg-white/80 shadow-lg rounded-md backdrop-blur-lg flex flex-col items-center justify-center text-center">
            <img src="/img-4.svg" className="mb-4" />
            <p className="mb-2">혜택 4.</p>
            <p className="mb-2">가장 먼저 수료생을</p>
            <p>만나보실 수 있습니다.</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
