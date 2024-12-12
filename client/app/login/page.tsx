"use client"
import apiRequest from "@/lib/apiRequest"
import Link from "next/link"
import { useRouter } from "next/navigation"


const Login = () => {
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = {
      email: (form[0] as HTMLInputElement).value,
      password: (form[1] as HTMLInputElement).value
    }
    try {
      await apiRequest.post('/auth/login', formData)
      setTimeout(() => {
        router.push('/');
    }, 100);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-[50px] font-bold mb-16'>Login</h1>
      <form className='flex flex-col space-y-10 w-full items-center' onSubmit={handleLogin}>
        <input className='p-4 w-[50%] border border-gray-500' type='email' placeholder='Email'/>
        <input className='p-4 w-[50%] border border-gray-500' type='password' placeholder='Password' />
        <button className='p-4 w-[30%] bg-blue-500 text-white rounded rounded-[40px]' type="submit">Login</button>
        <p>Not having an account? <Link href='/register' className="underline text-blue-500">Register now</Link></p>
      </form>
  </div>
  )
}

export default Login