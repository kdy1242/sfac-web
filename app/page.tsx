import Image from 'next/image'
import {currentUser} from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  let fullname = "Guest";

  if (user) {
    const {firstName, lastName} = user;
    fullname = (firstName ? `${firstName} `: "") + (lastName ? lastName : "");
    if (!fullname) fullname = "User"
  }

  return (
    <main className="max-w-6xl mx-auto pt-8">
      <h1 className="inline-flex gap-1 text-lg">
        Welcome back,
        <span className="font-semibold">{fullname}</span>
      </h1>
    </main>
  )
}
