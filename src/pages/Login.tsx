import { useState } from 'react'
import { auth } from '../utils'
import { setToken } from '../redux/slices/auth.slice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const result = await auth(formData);
            console.log(result)
            const token = result.token;

            dispatch(setToken(token))

            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container mx-auto h-screen'>
            <div className="flex flex-col flex-auto w-full mt-60 max-w-md border p-6 rounded-md m-auto sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center text-darkGray">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12 text-darkGray">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-ishopOrange text-white hover:bg-orange-300">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
                            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login