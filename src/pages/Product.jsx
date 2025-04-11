  import React , { useContext, useEffect, useState } from 'react'
  import { useParams } from 'react-router-dom'
  import { ShopContext } from '../context/ShopContext'
  import assets from '../assets/assets'
  import starIcon from '../assets/star-icon.png'
  import starDullIcon from '../assets/star-dull-icon.png'
  import RelatedProducts from '../components/RelatedProducts'
  


  const Product = () => {

    const {productId} = useParams();

    const {products, currency, addToCart} = useContext(ShopContext);

    const [productData,setProductData] = useState(false);
    const [image,setImage] = useState('');
    const [ram, setRam] = useState('');



    
    useEffect(() => {
      if (products.length > 0) {
        const item = products.find(p => String(p.id) === String(productId));
        if (item) {
          if (typeof item.ram === "string") {
            item.ram = item.ram.split(',').map(r => r.trim());
          }



          console.log('🖼 image1:', item.image1); // log ra đây
          setProductData(item);
        }
      }
    }, [productId, products]);
    

    return productData ? (
      
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* -------------------------------- Product Data ------------------------------- */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

          {/* ------------------------------ Product Images ------------------------------- */}

          <div className='flex-1 flex flex-col-reserve gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>



              {
                productData.image1 && (
                  
                  <img src={productData.image1 ? `/images/${productData.image1}` : ''} className='w-full sm:w-[100%] h-[300px] sm:h-[200px] object-contain flex-shrink-0 cursor-pointer' alt="" />
                )
              }
            </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={productData.image1 ? `/images/${productData.image1}` : ''} alt="" />
            </div>
          </div>

          {/* ------------------------------ Product Info ------------------------------- */}
          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={starIcon} alt="" className="w-3 5" />
              <img src={starIcon} alt="" className="w-3 5" />
              <img src={starIcon} alt="" className="w-3 5" />
              <img src={starIcon} alt="" className="w-3 5" />
              <img src={starDullIcon} alt="" className="w-3 5" />
              <p className='pl-2'>(123)</p>

            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Ram:</p>
              <div className='flex gap-2'>
                {productData.ram.map((item,index)=>(
                  <button onClick={() => setRam(item)} className={`border py-2 px-4 bg-gray-200 ${item === ram ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData.id,ram)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt:8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
          
        </div>


        {/* ------------------------------ Description and Review Section ------------------------------- */}
        <div className='mt-20'>
          <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews(123)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>H</p>
              <p>U</p>
          </div>
        </div>

        {/* ------------------------------ Related Products ------------------------------- */}
        <RelatedProducts category={productData.category} />
      </div>
    ) : <div className=' opacity-0 '></div>
  }

  export default Product