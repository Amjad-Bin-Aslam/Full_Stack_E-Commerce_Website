import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Product() {

  const { productId } = useParams();
  const { products , currency , addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size , setSize] = useState("")

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0]) 
        return null
      }
    })

    // console.log(productData)
    // console.log(productId)

  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'> 
      
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item , index)=>(
                  <img  
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                  src={item} 
                  key={index} alt="" 
                  onClick={() => setImage(item)}
                  />
                ))
              }
            </div>
            <div className='w-full sm:w-[80%]'>
                <img className='w-full h-auto' src={image} alt="" />
            </div>
        </div>

          {/* Product information */} 
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 m-2'>
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                <p className='pl-2'>
                  (122)
                </p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {
                    productData.sizes.map((item , index)=>(
                        <button
                        className={`border py-2 px-4 bg-gray-200 cursor-pointer ${item === size ? 'border-orange-500' : ''} `} 
                        key={index} 
                        onClick={()=>setSize(item)}
                        > 
                        {item}
                        </button> 
                    ))} 
                </div>
              </div>

              <button 
              onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 active:bg-gray-700'
              >
              ADD TO CART
              </button>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Originl product.</p>
                  <p>Cash on delivery is available for this product.</p>
                  <p>Easy return and exchanfge policy within 7 days.</p>
              </div>
          </div>

      </div>

      {/* Description and review section */}
      <div className='mt-20'>
            <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam labore maiores officia. Harum quaerat ipsa deleniti a. In necessitatibus non ea quis omnis, expedita, amet temporibus facilis tenetur culpa eveniet laudantium nisi consequuntur fugit sit! Veritatis modi, corporis, quod rerum ad numquam suscipit voluptas obcaecati nulla esse, impedit placeat deleniti?</p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat iure velit at cupiditate, corrupti iusto odio architecto quisquam, dolorum sapiente esse accusantium saepe? Ullam, facere. Maiores perferendis suscipit ab tempore consequatur? Aperiam culpa possimus nulla doloribus harum consequuntur nam, inventore mollitia hic. Esse eligendi eum recusandae quia, hic reprehenderit inventore?
                </p>
            </div>
      </div> 

      {/* Related product */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
