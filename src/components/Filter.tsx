import { useState, useEffect, FC } from 'react'
import { getCategories, getProducts } from '../utils'
import { Link } from 'react-router-dom'
import CardProducts from './CardProducts'

interface FilterProps {
    data: any[],
    image?: any[],
}

const FilteredCards: FC<FilterProps> = (
    data,
    image
) => {
    console.log(data)
    return (
        <>
            {data ? data.data.map((product: any) => (
                <div className="px-5 flex flex-col justify-between h-full shadow rounded-md">
                    <Link to={`/product/${product._id}`} className="">
                        {/* <img
                            src={`${image}`}
                            alt=""
                            loading="lazy"
                            className=" lg:h-[350px] w-full object-contain sm:h-[450px]"
                        /> */}
                    </Link>

                    <div className='group space-y-3 mb-6 flex-grow'>
                        <h3 className="text-xl font-bold text-gray-700">
                            {product.name}
                        </h3>

                        <p className="text-ishopOrange font-semibold text-lg">
                            ${product.price}.00
                        </p>
                        {/* 
                        <button onClick={handleAddToCart} type="button"
                            className="px-4 py-3 bg-ishopOrange hover:bg-orange-600 outline-none text-white w-full 
                             transition ease-in duration-200 text-center text-base font-semibold shadow ">
                            Agregar al Carrito
                        </button> */}
                    </div>
                </div>
            )) : (
                <CardProducts
                    data={data}
                    image={image}
                />
            )}
        </>
    )
}

const Filter = () => {

    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])
    const [price, setPrice] = useState('')
    const [categoryId, setCategoryId] = useState<string[]>([])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        const id = e.target.value;

        if (checked) {
            // Agregar el ID de la categoría seleccionada a la lista
            setCategoryId([...categoryId, id])
        } else {
            // Eliminar el ID de la categoría deseleccionada de la lista
            setCategoryId(categoryId.filter((catId) => catId !== id))
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        console.log(categoryId)

    }

    useEffect(() => {
        const fetchCategories = async () => {
            const result = await getCategories()
            console.log(result)
            setCategory(result)
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await getProducts(10, 1)
            console.log(result)
            setProducts(result)
        }
        fetchProducts()
    }, [])


    return (
        <div className='flex'>
            <div className='flex-1'>
                <h1>Categorias</h1>
                <ul>
                    {category.map((category: any) => (
                        <li key={category._id}>
                            <input type="checkbox"
                                name={category.name}
                                value={category._id}
                                onChange={handleChange}
                                checked={categoryId.includes(category._id)}
                            />
                            <label htmlFor="">{category.name}</label>
                        </li>
                    ))}
                </ul>
                <button type='button' onClick={handleSubmit}>Submit</button>
            </div>
            <div className=''>
                {
                    categoryId.length > 0 && <FilteredCards data={products} />
                }
            </div>
        </div>
    )
}

export default Filter