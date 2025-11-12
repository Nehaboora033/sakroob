'use client';
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@/components/common/Container";
import SubHeading from "@/components/common/SubHeading";
import Description from "@/components/common/Description";
import Review from "@/components/Products-Details/Review";
import { Bestseller_Data } from "@/components/Home/Bestsellers";

export default function ProductDetailPage() {
    // ✅ use useParams() in client components
    const params = useParams();
    const slug = params?.slug as string;
    console.log(slug);

    // ✅ convert slug to number & find product
    const product = Bestseller_Data.find((item) => item.id === Number(slug));

    if (!product) {
        return (
            <p className="text-center mt-20 text-red-500 text-lg">
                Product not found.
            </p>
        );
    }

    return (
        <Container className="mt-20 flex flex-col gap-16">
            {/* Product Section */}
            <section className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 flex justify-center">
                    <Image
                        src={product.model}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                <div className="flex-1">
                    <SubHeading className="text-3xl mb-4">{product.title}</SubHeading>
                    <Description className="mb-4">
                        Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
                    </Description>
                    <h3 className="text-2xl font-semibold mb-2">${product.price}</h3>
                    <button className="px-6 py-3 bg-dark-blue text-white rounded-lg">
                        Add to Cart
                    </button>
                </div>
            </section>

            {/* Reviews Section */}
            <section>
                <Review />
            </section>
        </Container>
    );
}