"use client";

import * as React from "react";
import { assets, blog_data } from "@/assets/assets";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/component/Footer";
import Link from "next/link";

const page = ({ params }) => {
    const { id } = React.use(params);
    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    return (data ? <>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Link href={"/"}>
                    <Image src={assets.logo} alt="" width={180} className="w-[130px] sm:w-auto" />
                </Link>
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 
                sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]"
                >
                    Get started
                    <Image src={assets.arrow} alt="" />
                </button>
            </div>
            <div className="text-center my-24">
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto"
                >
                    {data.title}
                </h1>
                <Image
                    src={data.author_img}
                    alt=""
                    width={60}
                    height={60}
                    className="mx-auto mt-6 border border-white rounded-full"
                />
                <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
            </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
            <Image
                src={data.image}
                width={1280}
                height={720}
                alt=""
                className="border-4 border-white"
            />
            <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
            <p className="">{data.description}</p>
            <h3 className="my-5 text-lg font-semibold">Step 1: Self-Reflection and Goal Setting</h3>
            <p className="my-3">Before your can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your values, aspirations, and long-term goals.</p>
            <p className="my-3">Before your can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your values, aspirations, and long-term goals.</p>
            <h3 className="my-5 text-lg font-semibold">Step 2: Self-Reflection and Goal Setting</h3>
            <p className="my-3">Before your can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your values, aspirations, and long-term goals.</p>
            <p className="my-3">Before your can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your values, aspirations, and long-term goals.</p>
            <h3 className="my-5 text-lg font-semibold">Step 3: Self-Reflection and Goal Setting</h3>
            <p className="my-3">Before your can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your values, aspirations, and long-term goals.</p>
            <p className="my-3">Before your can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your values, aspirations, and long-term goals.</p>


            <h3 className="my-5 text-lg font-semibold">Conclusion</h3>
            <p className="my-3">
                Manage your lifestyle is a journey that requires commitment and self-awareness. By following this step-by-step guide, you can take control of your life and make meaningful changes that leads to a more balanced and fullfilling lifestyle. Remember that it's of to seek support and guidance from professionals or mentors along the way.
            </p>
            <div className="my-24">
                <p className="text-black font-semibold my-4">Share this article on social media</p>
                <div className="flex">
                    <Image src={assets.facebook_icon} width={50} alt="" />
                    <Image src={assets.twitter_icon} width={50} alt="" />
                    <Image src={assets.googleplus_icon} width={50} alt="" />
                </div>
            </div>
        </div>
        <Footer />
    </> : <></>
    );
};

export default page;