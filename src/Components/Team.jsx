import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
    const settings = {
        dots: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const data = [
        {
            name: 'Sanjay Tandon',
            img: './Images/12.JPEG',
            review: "Speedy & efficient means thru which my mediclaim was reimbursed to me. There is a huge improvement in services rendered by your organisation over the years. Thank you once again.",
        },
        {
            name: 'Dhamayanthi',
            img: './Images/11.JPEG',
            review: "I received help from Star during my surgery and recovery. And my faith in the company has increased a lot. Thanks a lot.",
        },
        {
            name: 'Sushanth',
            img: './Images/13.JPEG',
            review: "Didn't really know that filing and getting my claim processed could be literally this easy. I took care of myself while the Star Health team took care of the cashless bill settlement at the hospital.",
        }
    ];

    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-3 mt-10 mb-20'>
                <h1 className='text-xl md:text-4xl font-serif'>Hear From Our Happy Customers</h1>
                <p className='text-lg'>‘Happily Insured!’ with Star Health</p>
            </div>
            <div className='w-3/4 m-auto'>
                <div className='mt-20'>
                    <Slider {...settings}>
                        {data.map((d, index) => (
                            <div key={index} className='bg-white shadow-2xl h-[450px] text-black rounded-xl'>
                                <div className='h-56 rounded-t-xl bg-blue-700 flex justify-center items-center'>
                                    <img src={d.img} className='h-44 w-44 rounded-full' alt={d.name} />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                    <p className='text-xl font-semibold'>{d.name}</p>
                                    <p>{d.review}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex flex-col items-center justify-center mt-20 gap-5'>
                    <h1 className='text-xl md:text-3xl font-semibold'>AstraCare and Allied Insurance Co Ltd</h1>
                    <p className='text-lg text-blue-700'>Privacy Policy</p>
                    <p className='text-center mb-3'>
                        Copyright ©2024. AstraCare Insurance. All rights reserved. 
                        <br />
                        This website is managed by{' '}
                        <a
                            href="https://vaishalitech.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-blue-700 hover:underline"
                        >
                            VaishaliTech
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Team;
