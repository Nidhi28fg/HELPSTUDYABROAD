"use server";
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import User from '@/app/components/User';


export default async function Page() {
  const session = await auth();  
  
  if (!session?.user) {
    redirect("/signin");
  }
    const safeUser = {
    name: session.user.name || "Unknown User",
    email: session.user.email || "Not Provided",
    image: session.user.image || ""
  };

  return <><User /></>
}