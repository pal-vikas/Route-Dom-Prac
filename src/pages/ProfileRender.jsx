import React from 'react'
import { Link } from 'react-router-dom'

function ProfileRender({img, name, designation}) {
  return (
    <div>
            <Link to={`/${name}`}>
              <div className="flex items-center gap-5 mb-5 ">
                  <img className='rounded-full object-cover' src={img} alt="profile" />
                  <div className=" text-xl font-bold">
                      <p>{name}</p>
                      <p className='text-sm text-neutral-500'>{designation}</p>
                  </div>
              </div>
            </Link>
    </div>
  )
}

export default ProfileRender
