import { createContext, useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    const currency = "$";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState("");

    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);


    const [token, setToken] = useState('');


    const navigate = useNavigate();
    
    const addToCart = async (itemId, ram) => {
        ram = String(ram);

        if (!ram || ram === "null" || ram === "undefined") {
            toast.error('Select Product Ram');
            return;
        }

        let cardData = structuredClone(cartItems);
        let quantity = 1;

        if (cardData[itemId]) {
            if (cardData[itemId][ram]) {                
                cardData[itemId][ram] += 1;
            }
            else {

                
                
                cardData[itemId][ram] = 1;
            }
        }
        else {
            cardData[itemId] = {};
            cardData[itemId][ram] = 1;
        }
        setCartItems(cardData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/users/cart/add', { itemId, ram, quantity}, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                  });
                  
            } catch {
                console.log(error);
                toast.error(error.message);
            }
        }
    }


    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems ) {
            for(const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, ram, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][ram] = quantity;
        setCartItems(cartData);

        if (token) {
            try {

                await axios.post(backendUrl + '/api/users/cart/update', {itemId, ram, quantity}, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                  });
            } catch {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            const itemInfo = products.find(product => String(product.id) === String(items));
            if (!itemInfo) continue; // 👉 bỏ qua nếu không tìm thấy sản phẩm
    
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            }
        }
        return totalAmount;
    }
    

    const getProductsData = async () =>{        
        try {

            const response = await axios.get(backendUrl + '/api/products');
            if (response.data.success) {

                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const getUserCart = async () => {
        if (!token) return;
        try {
            const response = await axios.get(backendUrl + '/api/users/cart', {},  {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }



    useEffect(() => {
        
        getProductsData();

    
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'))
        }
    }, [])
    
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount,updateQuantity,
        getCartAmount, navigate, backendUrl,

        token, setToken
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;
