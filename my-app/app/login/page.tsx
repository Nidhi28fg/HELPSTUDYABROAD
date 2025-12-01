"use client";
import { Suspense } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
  firstName: string
  lastName: string
  age: number
}

 
export default function LoginPage() {
    const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            {/* <AcmeLogo /> */}
          </div>
        </div>
        <Suspense>
           <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email id </label>
      <input {...register("firstName", { required: true})} />
      <label>Password</label>
      <input {...register("lastName")} />
      <label>Password</label>
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
        </Suspense>
      </div>
      
    </main>
  );
}




// export default function App() {
//   const { register, handleSubmit } = useForm<IFormInput>()
//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true, maxLength: 20 })} />
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="number" {...register("age", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   )
// }