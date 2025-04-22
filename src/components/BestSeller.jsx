import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const bestProducts = products.filter((item) => item.bestseller);
            console.log("BestSeller products:", bestProducts); // ✅ Log này chắc chắn hiện
            setBestSeller(bestProducts.slice(0, 10));
        }
    }, [products])
    

    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLER'}/>

            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            abcdef
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            


            {
                bestSeller.map((item, index) => {
                    console.log("BestSeller item:", item); // ✅ Log ra để kiểm tra
                    return (
                    <ProductItem
                        key={index}
                        id={item.id}
                        image={item.image1}
                        name={item.name}
                        price={item.price}
                    />
                    );
                })
            }

        </div>
    </div>
  )
}

export default BestSeller