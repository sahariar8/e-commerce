"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter();
    const handleNavigate = () =>{
        router.push('/');
    }
  return (
    <div>
        <h1 className="text-green-400 text-center py-2">I am form contact page</h1>
        <div className='text-center'>
            <button className='bg-teal-500 p-2 rounded-sm' onClick={handleNavigate}>GoTo Home page</button>
        </div>
    </div>
  )
}

export default page
