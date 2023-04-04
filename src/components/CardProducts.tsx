import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface CardProductsProps {
    data: any,
    image?: any[],
    handleAddToCart?: (product: any) => void
}

const CardProducts: FC<CardProductsProps> = ({
    data,
    image,
    handleAddToCart
}) => {

    return (

        <>
            <div className="px-5 flex flex-col justify-between h-full shadow rounded-md">
                <Link to={`/product/${data._id}`} className="">
                    <img
                        src={`${image}`}
                        alt=""
                        loading="lazy"
                        className=" lg:h-[350px] w-full object-contain sm:h-[450px]"
                    />
                </Link>

                <div className='group space-y-3 mb-6 flex-grow'>
                    <h3 className="text-xl font-bold text-gray-700">
                        {data.name}
                    </h3>

                    <p className="text-ishopOrange font-semibold text-lg">
                        ${data.price}.00
                    </p>

                    <button onClick={handleAddToCart} type="button"
                        className="px-4 py-3 bg-ishopOrange hover:bg-orange-600 outline-none text-white w-full 
                             transition ease-in duration-200 text-center text-base font-semibold shadow ">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </>

    )
}

export default CardProducts