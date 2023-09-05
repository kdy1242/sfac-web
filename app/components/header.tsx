
import { currentUser } from "@clerk/nextjs";
import Nav from "./nav";

export default async function Header() {
  const user = await currentUser();
  const isLoggedIn = !!user;

  return (
    <div  className='mx-20'>
      <Nav isLoggedIn={isLoggedIn}/>
    </div>
  )
}
