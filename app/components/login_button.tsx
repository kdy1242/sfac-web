'use client'

import { Button } from "sfac-designkit-react";

export default function LoginButton() {
    return <Button
    variant="secondary"
    text="로그인"
    className="!w-[88px] last:ml-auto"
    textSize="sm"
    textWeight="bold"
    asChild
    />
}
