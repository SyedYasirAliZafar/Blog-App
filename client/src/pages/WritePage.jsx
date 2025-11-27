import React from 'react'
import {useUser} from '@clerk/clerk-react'
import 'react-quill-new/dist/quill.snow.css'
import ReactQuill from 'react-quill-new'

function WritePage() {

  const {isLoaded, isSignedIn} = useUser()

  if(!isLoaded){
    return <div className=''>Loading...</div>
  }

  if(isLoaded & isSignedIn){
    return <div className=''>You should Login</div>
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex gap-6 flex-col '>
      <h1 className='text-gray-500 text-2xl font-light mt-6'>Create a New Post</h1>
      <form action="" className='flex flex-col gap-6 mb-6 flex-1'>
        <button className='rounded-2xl text-center flex text-gray-400 py-3 text-sm p-2 w-max shadow-md px-4 cursor-pointer mt-5 bg-white'>Add a cover Image</button>
        <input type="text" className='text-4xl font-semibold bg-transparent outline-none' placeholder='My Awesome Stories' />
        <div className='flex items-center gap-4'>
          <label htmlFor="" className='text-sm'>Choose a cateogory</label>
          <select name="cat" id="" className='bg-white p-2 rounded-xl shadow-md '>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="seo">Engines</option>
            <option value="marketing">Marketing</option>
            <option value="databases">Databases</option>
          </select>
        </div>
        <textarea  name="desc" placeholder='A Short Description'className='bg-white p-4 rounded-xl shadow-md ' />
          <ReactQuill theme="snow" className='flex-1 bg-white rounded-xl shadow-md '/>
        <button className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36'>Send</button>
      </form>
    </div>
  )
}

export default WritePage
