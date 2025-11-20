'use client';
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@/components/common/Container";
import SubHeading from "@/components/common/SubHeading";
import Description from "@/components/common/Description";
import Review from "@/components/Products-Details/Review";
import { Bestseller_Data } from "@/components/Home/Bestsellers";
import { Popular_Data } from "@/components/Products-Details/PopularProductsReview";
import Button from "@/components/common/Button";
import starrating from '../../../assets/png/star-rating.png'
import { Decrease, Increase } from "@/Utils/icons";
import PopularProductsReview from "@/components/Products-Details/PopularProductsReview";
import Link from "next/link";
import { useCart } from "@/app/cart/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const allProducts = [...Bestseller_Data, ...Popular_Data];

  const product = allProducts.find((item) => item.id === Number(slug));
  // 🧩 Quantity state
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        Product not found.
      </p>
    );
  }

  // 🧩 Handle increase/decrease
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // 🧩 Calculate total price
  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <Container className="mt-20 flex flex-col gap-16">
      {/* Product Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <Image
            src={product.model}
            alt={product.title}
            width={250}
            height={400}
            className="rounded-lg "
          />
        </div>

        <div className="flex-1">
          <SubHeading className="sm:text-[34px]! text-[28px]! mb-4">
            {product.title}
          </SubHeading>
          <Description className="mb-4">
            The D-Link DSL-2790U is a high-speed ADSL2+ wireless router with
            speeds up to 300 Mbps—ideal for browsing, streaming, and gaming. It
            features four Ethernet ports, strong security, and guest network
            support. Perfect for reliable internet in homes and small offices.
          </Description>

          {/* 💰 Dynamic total price */}
          <h3 className="sm:text-2xl text-[20px] font-semibold sm:mb-5 mb-3">
            ${totalPrice}
          </h3>

          <Image className="mb-5" src={starrating} alt="img stars" />

          {/* 🔢 Quantity control */}
          <div className="h-11 flex mb-5">
            <div
              onClick={handleDecrease}
              className="bg-sky-blue py-[13px] px-[19px] flex items-center justify-center rounded-tl-lg rounded-bl-lg cursor-pointer"
            >
              <Decrease />
            </div>
            <div className="border-y border-[#0000003D] py-1.5 px-[31px] text-[20px] text-[#586C80] min-w-[60px] text-center">
              {quantity.toString().padStart(2, "0")}
            </div>
            <div
              onClick={handleIncrease}
              className="bg-dark-blue py-[13px] px-[19px] flex items-center justify-center rounded-tr-lg rounded-br-lg cursor-pointer"
            >
              <Increase />
            </div>
          </div>

          {/* 🛒 Buttons */}
          <div className="flex gap-3">
            <Button className="bg-dark-blue text-white rounded-full min-[450px]:w-[200px]">
              Shop Now
            </Button>

            <Link href={"/cart"} className="">
              <Button
                className="text-dark-blue border border-dark-blue  rounded-full min-[450px]:w-[200px]"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.model.src,
                    quantity: quantity,
                  })
                }
              >
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <Review />
      </section>
      <section>
        <PopularProductsReview />
      </section>
    </Container>
  );
}