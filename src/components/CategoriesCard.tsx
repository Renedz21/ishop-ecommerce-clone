import React, { useState, useEffect } from 'react'
import { getCategories } from '../utils'
import Title from './Title'

const CategoriesCard = () => {

    const [categories, setCategories] = useState<any>([])

    useEffect(() => {
        const fetchCategories = async () => {
            const result = await getCategories()
            console.log(result)
            setCategories(result)
        }
        fetchCategories()
    }, [])

    return (
        <>
            <Title title='Categorias' />
            <div className='flex items-center justify-evenly gap-4 md:flex-row flex-col'>
                {categories.map((category: any) => (
                    <div key={category._id} className='relative border w-full h-[300px] flex items-center justify-center cursor-pointer opacity-50 hover:opacity-95 transition ease-linear duration-200 rounded-lg'>
                        <img src={category.image} alt="" loading='lazy'
                            className='w-full h-full object-cover rounded'
                        />
                        <h3 className='absolute font-bold text-white text-5xl'>{category.name}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategoriesCard