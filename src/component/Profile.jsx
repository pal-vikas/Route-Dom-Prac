import React from 'react'
import instagramUsers from '../UserData'
import ProfileRender from '../pages/ProfileRender'

function Profile() {
  return (
    <div>
          <div className=" w-[500px] mx-auto p-10 mt-20  ">
            <h1 className='text-3xl font-bold mb-4 '>Profle Details</h1>
            {
                    instagramUsers.map(data => <ProfileRender img={data.profilePic} name={data.name} designation={data.designation} />)
            }
          </div>
    </div>
  )
}

export default Profile
