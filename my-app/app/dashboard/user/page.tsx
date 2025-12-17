"use server";
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import User from '@/app/components/User';


export default async function Page() {
  const session = await auth();  
  
  if (!session?.user) {
    redirect("/signin");
  }

  return <><User /></>
}