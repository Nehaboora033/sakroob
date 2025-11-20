'use client';
import { useSearchParams } from 'next/navigation';
import { Bestseller_Data } from '@/components/Home/Bestsellers';
import { Popular_Data } from '@/components/Products-Details/PopularProductsReview'
import ratingstars from '../../assets/png/star-rating.png';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCart, ProductLike } from '@/Utils/icons';
import SubHeading from '@/components/common/SubHeading';
import Description from '@/components/common/Description';
import Button from '@/components/common/Button';
import { useCart } from '../cart/CartContext';

const Searchpage: React.FC = () => {

    const { addToCart } = useCart();
    const params = useSearchParams();
    const query = params.get("query")?.toLowerCase() || "";

    // Merge both product arrays
    const allProducts = [...Bestseller_Data, ...Popular_Data];

    const filtered = allProducts.filter(item =>
        item.category.toLowerCase().includes(query)
    );

    return (
        <div className="p-10 max-w-[1140px] mx-auto">
            <h1 className=" font-semibold mb-6 ">
                Showing results for:{` "${query}"`}
            </h1>

            {filtered.length === 0 && (
                <p>No products found.</p>
            )}

            <div className="grid min-[550px]:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(product => (
                    <div className={`border  border-[#112D4914] rounded-lg h-[536px]  p-4 flex flex-col gap-5 shadow-model`} key={product.id}>
                        <div className={`h-1/2  rounded-lg flex justify-center relative  bg-light-blue`}>
                            <div className='bg-[#D7DCE2] absolute bottom-0 z-2 right-0 m-2.5 cursor-pointer flex items-center justify-center rounded-full size-8'>
                                <ProductLike />
                            </div>
                            <Image src={product.model} alt='model' height={200} width={200} />
                        </div>
                        <div className='h-1/2 flex flex-col justify-between'>
                            <div className=''>
                                <SubHeading className='sm:text-2xl! text-[20px]! mb-2'>
                                    {product.title}
                                </SubHeading>
                                <Description>
                                    Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
                                </Description>
                            </div>
                            <div className='flex justify-between flex-col  '>
                                <div className='flex items-center justify-between mb-2 '>
                                    <h4 className='font-semibold sm:text-[24px] text-[16px]'>
                                        {`$${product.price}`}
                                    </h4>
                                    <Image src={ratingstars} alt='rating stars' />
                                </div>
                                <div className='flex justify-between items-center '>
                                    <Link href={`/products/${product.id}`}>
                                        <Button className='border '>
                                            Shop Now
                                        </Button>
                                    </Link>

                                    <div
                                        className='rounded-full bg-sky-blue size-12 flex items-center justify-center cursor-pointer'
                                        onClick={() =>
                                            addToCart({
                                                id: product.id,
                                                title: product.title,
                                                price: product.price,
                                                image: product.model.src,
                                                quantity: 1
                                            })
                                        } >
                                        <ProductCart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Searchpage;