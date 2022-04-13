import axios from 'axios';

export const getAllProducts = async () => {
    const request = axios.get('https://fakestoreapi.com/products')
   .then((response: any) => {
     // handle success
     console.log('RESPONSE: ', response);
     return response;
   })
   .catch((error: any) => {
     // handle error
     console.log(error);
   })
   .then(() => {
     // always executed
   });
   return await request;
}