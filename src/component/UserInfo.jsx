import React from 'react'
import { useParams } from 'react-router-dom'
import instagramUsers from '../UserData';
import verified from '../assets/verified.svg'

function UserInfo() {
  
   let {name} = useParams();
    let instaData = instagramUsers.find(data => data.name == name)

  return (
    <div>
            <div className="w-[900px]  mx-auto p-15 mt-40 flex  gap-5">
                <img className='rounded-full h-50' src={instaData.profilePic} alt="logo" />
                <div className="flex flex-col gap-1 ">
                <div className=" flex items-center gap-3">
                    <p className='text-xl font-semibold'>{instaData.name}</p>
                    {
                        instaData.isVerified ? <img className='h-5 ' src={verified} alt="logo" /> : ""
                    }
                </div>
                <p className='text-neutral-600'>{instaData.designation}</p>
                <p className='text-neutral-600'>{instaData.bio}</p>
                <div className=" flex gap-5 mt-1">
                    <button className='bg-neutral-300 py-2 px-4 rounded-lg'>Followers {instaData.followers}</button>
                    <button className='bg-neutral-300 py-2 px-4 rounded-lg'>Following {instaData.following}</button>
                </div>
                </div>
            </div>
    </div>
  )
}

export default UserInfo
