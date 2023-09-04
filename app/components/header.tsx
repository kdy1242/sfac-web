'use client'
import 'sfac-designkit-react/style.css'
import { Button, Gnb, Logo } from 'sfac-designkit-react'
import Nav from 'sfac-designkit-react/dist/Navigation'

export default function Header() {
  return (
    <Nav>
      <Logo width={73} height={38} className="mr-[30px]" />
      
      <Gnb text="About" />
 
      <Button
        variant="secondary"
        text="로그인"
        className="!w-[88px] last:ml-auto"
        textSize="sm"
        textWeight="bold"
        asChild
      />
  </Nav>
 

  )
}
