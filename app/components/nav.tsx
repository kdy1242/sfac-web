'use client'

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button, Gnb, Logo, Navigation } from "sfac-designkit-react";

export default function Nav(props: any) {
    return (
        <>
            <Navigation>
                <Logo width={73} height={38} className="mr-[30px]" />
                
                <Gnb text="ABOUT" />
                <Gnb text="MENU" linkTo="about" />
                <Gnb text="커뮤니티" linkTo="about" />
        
                <div className="flex-1"/>
                
                {props.isLoggedIn ? (
                <UserButton afterSignOutUrl="/" />
                ) : (
                <Link href="/sign-in" onClick={() => { console.log(props.isLoggedIn); }}>
                    <Button
                    variant="secondary"
                    text="로그인"
                    className="!w-[88px] last:ml-auto"
                    textSize="sm"
                    textWeight="bold"
                    asChild
                    />
                </Link>
                )}
            </Navigation>
        </>
    )
}
