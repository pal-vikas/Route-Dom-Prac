import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
            <Link>
              <div className="border-b border-neutral-200 p-3 bg-neutral-300">
                  <div className="w-[900px] flex items-center mx-auto justify-between">
                      {/* <a className='text-4xl font-bold text-red-500' href="/">Quotes</a> */}
                      <Link to="/profile" className='text-4xl font-bold text-red-500'>Profiles</Link>
                      <div className="flex gap-10 text-red-600 text-2xl font-semibold">
                          {/* <a href="/">Home</a> */}
                          <Link to="/">Home</Link>
                          {/* <a href="/about">About</a> */}
                           <Link to="/about">About</Link>
                          {/* <a href="/contact">Contact</a> */}
                           <Link to="/contact">Contact</Link>
                            <Link to="/profile">Profile</Link>
                      </div>
                  </div>
              </div>
            </Link>
    </div>
  )
}

export default Navbar
