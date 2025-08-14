"use client"
import React from 'react'
import { BsShare } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs';
import './MoviePage.css'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';


import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard';
import { usePathname, useParams } from 'next/navigation'
import Link from 'next/link';

const MoviePage = () => {
    const pathname = usePathname()

    const movie={
        wideposter: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/yodha-et00318073-1710241050.jpg",
        portraitposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/yodha-et00318073-1710241050.jpg",
        title: "Yodha",
        rating: 8.5,
        halls: [
            "2D",
            "3D"
        ],
        languages: [
            "Telugu",
            "Hindi",
            "English"
        ],
        duration: "2h 15m",
        type: "Action/Thriller",
        releasedate: "sep 3, 2023",
        cast: [
            {
                _id: "1",
                name: "Sidharth Malhotra",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg"
            },
            {
                _id: "2",
                name: "Raashii Khanna",
                role: "Actress",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/raashi-khanna-35421-1656056374.jpg"
            },
            {
                _id: "3",
                name: "Disha Patani",
                role: "Actress",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/disha-patani-1061408-1663658283.jpg"
            }
        ],
        crew: [
            {
                _id: "1",
                name: "Sagar Ambre",
                role: "Director",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sagar-ambre-2016415-1664187654.jpg"
            },
            {
                _id: "2",
                name: "Pushkar Ojha",
                role: "Director",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/pushkar-ojha-2016416-1708426440.jpg"
            },
            {
                _id: "3",
                name: "Apoorva Mehta",
                role: "Producer",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/apoorva-mehta-2029701-1690523813.jpg"
            }
        ],about: "After failing at an important mission - years later, the system is shocked to find Arun on board in very mysterious circumstances on a hijacked flight. All evidence points towards Arun being on a mission for revenge against the system that snatched everything away from him"
    }
  return (
    <div className='moviepage'>
        <div className='c1' style={{
                    backgroundImage: `url(${movie.wideposter})`
                }}>
                <div className='c11'>
                <div className='left'>
                <div className='movie_poster'
                        style={{
                            backgroundImage: `url(${movie.portraitposter})`
                        }}
                    >
                        <p>In cinemas</p>
                    </div>
                    <div className='movie_details'>
                    <p className='title'>
                        {movie.title}
                    </p>
                    <p className='rating'>
                        <BsFillStarFill className='star' />&nbsp;&nbsp;
                        {movie.rating}/10
                    </p>
                    <div className='halls_languages'>
                                <p className='halls'>
                                    {
                                        movie.halls.map((hall, index) => {
                                            return (
                                                <span key={index}>{hall} </span>
                                            )
                                        })
                                    }
                                </p>
                                <p className='languages'>
                                    {
                                        movie.languages.map((language, index) => {
                                            return (
                                                <span key={index}>{language} </span>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                            <p className='duration_type_releasedat'>
                                        <span className='duration'>
                                            {movie.duration}
                                        </span>
                                        <span>•</span>
                                        <span className='type'>
                                            {movie.type}
                                        </span>
                                        <span>•</span>
                                <span className='releasedat'>
                                    {movie.releasedate}
                                </span>
                            </p>
                            <Link
                                href={`${pathname}/buytickets`}
                                className=''
                                >
                                <button className='bookbtn'>Book Tickets</button>
                            </Link>
                    </div>
                </div>
                <div className='right'>

                    <button className='sharebtn'><BsShare className='shareicon' />Share</button>
                </div>
            </div>
        </div>
        <div className='c2'>
            <h1>About the Movie</h1>
            <p>{movie.about}</p>
            <div className='line'></div>
            <h1>Cast</h1>
            <div className='circlecardslider'>
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    '@1.50': {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                    {
                        movie.cast.map((cast,index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <CelebCard {...cast} />
                                </SwiperSlide>
                            )
                        })  
                    }
                </Swiper>
            </div>
            <div className='line'></div>
            <h1>Crew</h1>
            <div className='circlecardslider'>
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    '@1.50': {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                    {
                        movie.crew.map((cast,index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <CelebCard {...cast} />
                                </SwiperSlide>
                            )
                        })  
                    }
                </Swiper>
            </div>
            <div className='line'></div>
            <h1>Your might also like</h1>
            <MovieCarousel/>
        </div>
        </div>
  )
} 

export default MoviePage