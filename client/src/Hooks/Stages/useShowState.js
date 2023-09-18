// // useApiData.js
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const apiUrl = ' localhost:5000/all-application';

// const useShowState = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         const responseData = response.data;
//         const stages = responseData.map((item) => item.stage);
//         console.log(stages);

//         setData(stages);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { data, loading };
// };

// export default useShowState;
