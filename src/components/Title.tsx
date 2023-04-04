import { FC } from 'react'
import { Link } from 'react-router-dom'

interface TitleProps {
    title: string
    link?: string
}

const Title: FC<TitleProps> = ({ title, link }) => {

    return (
        <>
            {link ? (
                <Link to={`${link}`} className='text-2xl font-bold text-ishopOrange mb-4 hover:underline'>{title}</Link>
            ) : (
                <h1 className='text-2xl font-bold text-ishopOrange mb-4'>{title}</h1 >
            )}
        </>
    )
}

export default Title