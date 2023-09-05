
export default function Add() {
  return (
    <div className='max-w-6xl mx-auto w-full'>
      <div className="inline-block border border-gray-300 rounded-3xl p-2">
        <input
          type="text"
          className="border-none outline-none w-max"
          placeholder="게시글 제목을 입력하세요."
        />
      </div>
      <div className='max-w-6xl mx-auto'>
        <div className="inline-block border border-gray-300 rounded-3xl p-2">
            <textarea
              className="border-none outline-none w-full h-[100px]"
              placeholder="게시글 내용을 입력하세요."
            />
        </div>
      </div>
    </div>
  )
}
