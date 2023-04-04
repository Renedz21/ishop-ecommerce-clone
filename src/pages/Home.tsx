import React, { useEffect, useState } from "react"
import { getProducts } from "../utils";
import { addToCart } from "../redux/slices/cart.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setItem } from "../utils/localStorage";
import toast, { Toaster } from "react-hot-toast";
import Notification from "../components/Notification";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/CardProducts";
import CategoriesCard from "../components/CategoriesCard";
import Title from "../components/Title";
import CardProducts from "../components/CardProducts";

interface Products {
    _id: string,
    category: string,
    description: string,
    isDeleted: boolean,
    name: string,
    image: any[],
    price: number
}

const Home = () => {

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
        <div className='container mx-auto md:py-4 px-4'>
            <HeroBanner />
            <CategoriesCard />
            <div className="w-full h-full mt-6 md:mt-10">
                <Title title="Productos" link="products" />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6">
                    {products.map((product: Products) => (
                        <CardProducts
                            data={product}
                            image={product.image[0]}
                            key={product._id}
                            handleAddToCart={() => handleAddToCart(product)}
                        />
                    ))}
                    <Toaster />
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home