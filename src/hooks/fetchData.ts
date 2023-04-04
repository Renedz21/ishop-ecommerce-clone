// import { useState, useEffect } from "react";
// import axios from "axios";

// export const useFetchData = (url: string) => {

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await axios.request(url);
//                 setData(result.data);
//             } catch (error) {
//                 setError(error);
//             }
//             setLoading(false);
//         };
//         fetchData();
//     })

// }