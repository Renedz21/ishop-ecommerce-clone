import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { clearToken } from '../redux/slices/auth.slice';

import { redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setItem } from '../utils/localStorage';

import { toggleTheme } from '../redux/slices/theme.slice';
import { lightTheme } from '../utils/theme';

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Shop',
        href: '#'
    },
    {
        name: 'Contact',
        href: '#'
    },
    {
        name: 'About',
        href: '#'
    }
]

const Navbar = () => {

    const dispatch = useAppDispatch()
    const itemExist = useAppSelector(state => state.cartReducer)
    const { theme } = useAppSelector(state => state.themeReducer)

    const [isOpen, setIsOpen] = useState(false)
    const [isLoggin, setIsLoggin] = useState(false)

    const handleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <header aria-label="Site Header" className="border-b border-gray-100">
            <div
                className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
            >
                <div className="flex items-center gap-4">
                    <button type="button" className="p-2 lg:hidden">
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <a href="#" className="flex">
                        <span className="sr-only">Logo</span>
                        <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-end gap-8">
                    <nav
                        aria-label="Site Nav"
                        className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
                    >
                        {links.map((link) => (
                            <a key={link.name} href={link.href} className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center">
                        <div
                            className="flex items-center divide-gray-100 border-gray-100"
                        >
                            <span>
                                <a
                                    href="/cart"
                                    className="block border-b-4 border-transparent p-6 hover:border-red-700 relative"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    {itemExist.length > 0 && (
                                        <span className='absolute top-4 right-[6px] bg bg-red-700 text-white flex items-center justify-center rounded-full p-1 h-6 w-6'>{itemExist.length}</span>
                                    )}
                                    <span className="sr-only">Cart</span>
                                </a>
                            </span>

                            <span>
                                <a
                                    href="/login"
                                    className="block border-b-4 border-transparent p-6 hover:border-red-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>


                                    <span className="sr-only"> Account </span>
                                </a>
                            </span>
                            <span>
                                <button
                                    className='block border-b-4 border-transparent p-6 hover:border-red-700'
                                    onClick={() => dispatch(toggleTheme())}
                                >
                                    {theme === lightTheme ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>

                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>

                                    )}
                                </button>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar