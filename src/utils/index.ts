import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

interface FormData {
    email: string;
    password: string;
}

export const auth = async (data: FormData) => {

    const { email, password } = data;

    const result = await api.post("/auth/login", {
        email,
        password
    })

    return result.data;
}

export const getProducts = async (limit: number, page: number, categoryId?: any) => {
    if (categoryId) {
        const result = await api.get(`/products?limit=${limit}&page=${page}?categoryId=${categoryId}`);
        console.log(result.data);
        return result.data;
    } else {
        const result = await api.get(`/products?limit=${limit}&page=${page}`);
        console.log(result.data);
        return result.data;
    }
}

export const getProduct = async (id: string) => {
    const result = await api.get(`/products/${id}`);
    return result.data;
}
export const getCategories = async () => {
    const result = await api.get('/categories');
    return result.data;
}
