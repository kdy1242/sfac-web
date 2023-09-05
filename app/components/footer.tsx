
export default function Footer() {
  return (
      <div className="bg-white-100 flex flex-col items-center py-8">
          <p className="font-bold">인사이드아웃 사회적 협동조합</p>
          <p>고유번호: 324-82-00580|이사장 : 염민호 (와이엠에스닷코)</p>
          <p>통신판매업 신고번호 : 2022-경기김포-3659</p>
          <p>주소 : 서울특별시 강서구 마곡중앙2로 11, 3층 305호(마곡동, M밸리 W TOWER III)</p>
          <p>연락처 : 050-6683-1001</p>
          <p>고객센터 : cs@sniperfactory.com</p>
          <div className="flex flex-row justify-center">
              <p className="underline">개인정보 처리방침</p>
              <p className="mx-2">|</p>
              <p className="underline">서비스 이용약관</p>
              <p className="mx-2">|</p>
              <p className="underline">환불규정</p>
          </div>
          <div className="flex flex-row">
              <a href="https://www.facebook.com">
                  <img src="/facebook.svg" alt="facebookLogo" className="mr-4" />
              </a>
              <a href="https://www.instagram.com">
                  <img src="/instagram.svg" alt="instagramLogo" className="mr-4" />
              </a>
              <a href="https://www.youtube.com">
                  <img src="/youtube.svg" alt="youtubeLogo" />
              </a>
          </div>
      </div>
  )
}