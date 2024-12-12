"use client"
import apiRequest from "@/lib/apiRequest"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Register = () => {
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = {
      username: (form[0] as HTMLInputElement).value,
      email: (form[1] as HTMLInputElement).value,
      password: (form[2] as HTMLInputElement).value,
      secretKey: (form[3] as HTMLInputElement).value
    }
    try {
      await apiRequest.post('/auth/register', formData)
      router.push('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-[50px] font-bold mb-16'>Register</h1>
      <form className='flex flex-col space-y-10 w-full items-center' onSubmit={handleRegister}>
        <input className='p-4 w-[50%] border border-gray-500' type='text' placeholder='Username' />
        <input className='p-4 w-[50%] border border-gray-500' type='email' placeholder='Email' />
        <input className='p-4 w-[50%] border border-gray-500' type='password' placeholder='Password' />
        <input className='p-4 w-[50%] border border-gray-500' type='password' placeholder='Secret key' />
        <button className='p-4 w-[30%] bg-green-500 text-white rounded rounded-[40px]' type="submit">Register</button>
        <p>Already having an account? <Link href='/login' className="underline text-blue-500">Login now</Link></p>
      </form>
    </div>
  )
}

export default Register