import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


import axios from 'axios';
import { toast } from 'react-toastify';
const Verify = () => {
    
    const navigate = useNavigate()

    const { token, setCartItems, backendUrl} = useContext(ShopContext);
    const [searchParams,setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

  
    
    const verifyPayment = async () => {



    
    
    
        try {
            if (!token) {


                return null
            }


            const response = await axios.post(backendUrl + '/api/orders/verifyStripe', {success, orderId}, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
            } else {
                navigate('/cart')
            }
        } catch (error) {

            console.log(error)

            toast.error(error.message)
        }
    }
    
    

    useEffect(()=> {
            if (token) {
            verifyPayment();

            
            } else {
                toast.error("Bạn cần đăng nhập để xác nhận thanh toán.");
                navigate("/login");
            }

    },[token])
    
    return (
    <div>
        
    </div>
  )
}

export default Verify
