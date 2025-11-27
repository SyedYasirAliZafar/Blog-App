import React from 'react'
import Image from "../components/Image";

function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className='flex gap-4 items-center'>
        <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
        <span className='font-medium'>John Doe</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>
      <div className='mt-4'>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi hic et ipsam quibusdam facere sequi harum! Voluptates, delectus molestiae. Fuga incidunt excepturi eaque nisi modi quia atque ex sequi alias aut sint impedit quos libero, vel quibusdam architecto iusto cum culpa qui labore totam iure. Soluta unde fugit neque?
        </p>
      </div>
    </div>
  )
}

export default Comment
