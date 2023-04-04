import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { removeToCart, updateQuantity } from '../redux/slices/cart.slice'
import { Link } from 'react-router-dom'


const Cart = () => {

    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cartReducer)
    const itemsExist = useAppSelector((state) => state.cartReducer).length
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const isUserLogged = useAppSelector(state => state.authReducer.token)
    console.log(isUserLogged)

    const handleIncrementQuantity = (item: any) => {
        const updatedItem = { ...item, quantity: item.quantity + 1 }
        dispatch(updateQuantity(updatedItem))
    }
    const handleDecrementQuantity = (item: any) => {
        if (item.quantity > 1) {
            const updatedItem = { ...item, quantity: item.quantity - 1 }
            dispatch(updateQuantity(updatedItem))
        }
    }

    const handleRemoveCart = (item: any) => {
        dispatch(removeToCart(item))
    }

    return (
        <>
            {itemsExist > 0 ? (
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <header className="text-center">
                                <h1 className="text-xl font-bold text-ishopOrange sm:text-3xl">Tu Carrito</h1>
                            </header>

                            <div className="mt-8">
                                <ul className="space-y-4">

                                    {cart.map((item) => (
                                        <li key={item.name} className="flex items-center gap-4 border-gray-300 border-b-[1px]">
                                            <img
                                                src={item.image[0]}
                                                alt=""
                                                className="h-full md:w-[200px] rounded object-cover"
                                            />

                                            <div>
                                                <h3 className="text-2xl text-gray-900 font-semibold">{item.name}</h3>
                                                <span className='text-lg text-gray-600'>Categoria: {item.category.name}</span>
                                                {/* <span className='text-lg text-gray-600'>Color: {item.color}</span> */}
                                            </div>

                                            <div className="flex flex-1 items-center justify-end gap-4">
                                                <div className='flex items-center justify-center gap-3'>
                                                    <button className='p-2 rounded-md leading-4 font-semibold text-lg bg-gray-300 text-gray-900 transition-all hover:opacity-75' onClick={() => handleIncrementQuantity(item)}>+</button>
                                                    <span className='text-gray-800 text-lg'>{item.quantity}</span>
                                                    <button className='p-2 rounded-md leading-4 font-semibold text-lg bg-gray-300 text-gray-900 transition-all hover:opacity-75 disabled:opacity-50' disabled={item.quantity === 1} onClick={() => handleDecrementQuantity(item)}>-</button>
                                                </div>

                                                <button onClick={() => handleRemoveCart(item)} className="text-gray-600 transition hover:text-red-600">
                                                    <span className="sr-only">Remover</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </li>
                                    ))}

                                </ul>

                                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                    <div className="w-screen max-w-lg space-y-4">
                                        <dl className="space-y-0.5 text-sm text-gray-700">

                                            <div className="flex justify-between items-center">
                                                <p className='text-gray-900 text-xl font-bold'>Monto Total</p>
                                                <span className='font-semibold text-lg'>${totalAmount}.00</span>
                                            </div>
                                        </dl>

                                        <div className="flex justify-end">
                                            <Link to={`${isUserLogged ? '/checkout' : '/login'}`}
                                                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                            >
                                                Proceder a pagar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div>
                    Carrito vacio
                </div>
            )}

        </>
    )
}

export default Cart