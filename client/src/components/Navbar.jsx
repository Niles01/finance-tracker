import { UserButton, useUser } from '@clerk/clerk-react'
import { AlignRight, Home, Wallet, Contact, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {user , isLoaded} = useUser()

    const icon = {
        Home: <Home className='inline-flex' size={18} />,
        Finance: <Wallet className='inline-flex' size={18} />,
        Contact: <Contact className='inline-flex' size={18} />
    }

    const [sidebar, setsidebar] = useState(false)

    const togglebar = () => {
        setsidebar(!sidebar)
    }
    return (
        <>
            <nav className="bg-gradient-to-r from-purple-600 to-blue-500 p-5 shadow-lg sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <a href="#" className="text-white">FinanceTracker</a>
                    </div>

                    <div className="hidden md:flex space-x-8 text-white">
                        {['Home', 'Finance', 'Contact'].map((navlink, index) => (
                            <Link key={index} to={navlink == "Home" ? '/' : '/' + navlink}>
                                {Object.values(icon)[index]}{" "}{navlink}
                            </Link>
                        ))}
                        <UserButton />
                    </div>

                    <div className="md:hidden flex items-center">
                        <button id="hamburger" className="text-white focus:outline-none cursor-pointer">
                            <AlignRight onClick={() => togglebar()} />
                        </button>
                    </div>
                </div>

            </nav>
            <aside className={`min-h-screen shadow-lg text-white z-100 bg-gray-900 fixed left-0 top-0 w-7/12
            transform duration-300 ease-in-out ${sidebar ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='flex items-center justify-between border-b p-1'>
                    <div className='text-sm p-3 font-sanserif'>Welcome</div>
                    <X className='mr-1 cursor-pointer' size={20} onClick={() => togglebar()} />
                </div>
                <div className='flex flex-col justify-between gap-3 p-3'>
                    {['Home', 'Finance'].map((navlink, index) => (
                        <Link key={index} to={navlink == "Home" ? '/' : '/' + navlink} onClick={() => togglebar()}>
                            {Object.values(icon)[index]} {navlink}
                        </Link>
                    ))}
                </div>
                <div className='fixed flex gap-3 bottom-0 w-full px-3 py-4 border-t'>
                    <UserButton /> {user?.fullName}
                </div>
            </aside >
        </>
    )
}

export default Navbar