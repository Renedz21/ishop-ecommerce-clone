import { useState, useEffect } from 'react'
import { getProduct } from '../utils'

import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/slices/cart.slice';
import { useAppDispatch } from '../redux/hooks';
import { toast } from 'react-hot-toast';

interface Product {
    available: boolean;
    category: string;
    description: string;
    image: Array<string>;
    colors: any;
    isDeleted: boolean;
    name: string;
    price: number;
}

const ProductDetail = ({ }) => {

    const { id } = useParams<{ id: any }>()

    const dispatch = useAppDispatch()
    const [products, setProducts] = useState([])
    const [notification, setNotification] = useState(false)
    const [selectedColor, setSelectedColor] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState<Product>({
        available: false,
        category: '',
        description: '',
        image: [],
        colors: [],
        isDeleted: false,
        name: '',
        price: 0
    })

    const handleClick = (color: string) => {
        setSelectedColor(color)
    }

    const handleAddToCart = (product: any) => {
        console.log(product)
        dispatch(addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            quantity: 1
        }))

        // toast.success('Producto agregado al carrito', {
        //     position: 'top-right',
        //     duration: 4000,
        // })
    }

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true)
            const product = await getProduct(id).finally(() => setIsLoading(false))
            console.log(product)
            setProduct(product)
        }
        fetchProduct()
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            src={product.image[0]}
                            alt={product.name}
                            loading='lazy'
                            className="aspect-square w-full rounded-xl object-cover"
                        />

                        <div className="grid grid-cols-2 gap-4 lg:mt-4">
                            {product.image.slice(1).map((image) => (
                                <img
                                    key={image}
                                    alt="Les Paul"
                                    src={image}
                                    loading='lazy'
                                    className="aspect-square w-full rounded-xl object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="sticky top-0">
                        <strong
                            className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                        >
                            Order
                        </strong>

                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl">
                                    {product.name}
                                </h1>

                                <p className="text-sm">Highest Rated Product</p>

                                <div className="-ml-0.5 flex">
                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-gray-200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <p className="text-lg font-bold">${product.price}.00</p>
                        </div>

                        <div className="mt-4">
                            <div className="prose max-w-none text-justify">
                                <p>
                                    {product.description}
                                </p>
                            </div>

                        </div>

                        {/* <div className='w-full flex-auto mt-4' >
                            <h1 className='font-semibold text-xl mb-4'>Colores Disponibles</h1>
                            <ul className='flex items-center justify-start gap-4'>
                                {product.colors.map((color: any) => (
                                    <>
                                        <li onClick={() => handleClick(color.name)} className='rounded-full h-8 w-8 cursor-pointer' style={{
                                            backgroundColor: color.code
                                        }}></li>
                                    </>
                                ))}
                            </ul>
                        </div> */}
                        <div className="mt-8 flex gap-4">
                            <button
                                className="block rounded bg-ishopOrange px-5 py-3 text-xs w-full md:w-[50%] font-medium text-white hover:bg-orange-500"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>

                    </div >
                </div>
            </div>
        </section>

    )
}

export default ProductDetail