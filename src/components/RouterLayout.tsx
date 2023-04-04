import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export const RouterLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}