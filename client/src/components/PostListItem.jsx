import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

function PostListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>  
      {/* image */}
      <div className='md:hidden xl:block xl:w-1/3'>
        <Image src="postImg.jpeg" className="rounded-2xl object-cover"/>
      </div>
      {/* details */}
      <div className='flex flex-col gap-4 xl:w-2/3'>
        <Link to="/test" className="text-4xl font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et animi. Voluptates
        </Link>
        <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste fuga molestias vitae amet dolorem cumque sint qui excepturi atque!</p>
        <Link className='text-sm underline text-blue-800'>Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem
