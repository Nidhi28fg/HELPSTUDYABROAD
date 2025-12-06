import { redirect } from "next/dist/client/components/navigation";
import SignIn from "../components/SignIn";
import { auth } from "@/auth";

export default async function Page() {
 const session = await auth();
    console.log(session);
    if (session) {
      return redirect("/dashboard");
    }

  return <SignIn  />;  
}