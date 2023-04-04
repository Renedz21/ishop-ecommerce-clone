import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Pagination from '../components/Pagination'
import CardProducts from '../components/CardProducts'
import { useAppDispatch } from '../redux/hooks'
import { addToCart } from '../redux/slices/cart.slice'
import { toast } from 'react-hot-toast'
import { getProducts } from '../utils'

const Products = () => {


    const dispatch = useAppDispatch()
    const [products, setProducts] = useState<any>([])
    const [limit, setLimit] = useState<number>(3)
    const [page, setPage] = useState<number>(1)

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

        toast.success('Producto agregado al carrito', {
            position: 'top-right',
            duration: 5000,
        })
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts(limit, page)
            setProducts(products)
        }
        fetchProducts()
    }, [page])

    return (
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='flex-1'>
                    <Filter />
                </div>
                {/* {products.map((product: any) => (
                    <CardProducts
                        key={product._id}
                        data={product}
                        image={product.image[0]}
                    />
                ))} */}
                {/* <div>
                    <Pagination />
                </div> */}
            </div>
        </div>
    )
}

export default Products