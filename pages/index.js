import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Pagination from "../components/Pagination";
import dynamic from 'next/dynamic';
import HeroCarousel from "../components/HeroCarosul";
import ShopCard from "../components/ShopCard";


const MyCarousel = dynamic(() => import("../components/FacebookFeeds"), {
  ssr: false,
});



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const data = [
  { id: 1, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 2, name: "Shopping", type: "ธนาคาร" },
  { id: 3, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 4, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 5, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 6, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 7, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 8, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 9, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 10, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 11, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 12, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 13, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 14, name: "Shopping", type: "ชาบู ซูชิ" },
  { id: 15, name: "Shopping", type: "ชาบู ซูชิ" },

]

export default function Home() {

  const router = useRouter();
  const { locale } = router;

  const [search, setNewSearch] = useState("");
  const [windowSize, setWindowSize] = useState();

  const filtered = !search
    ? data
    : data.filter((shop) => shop.type.toLowerCase().includes(search.toLowerCase())
      || shop.name.toLowerCase().includes(search.toLowerCase())
    );


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale, scroll: false });
  };

  const handleWindowResize = useCallback(event => {
    setWindowSize(window.innerWidth);
  }, []);


  useEffect(() => {

    if (windowSize <= 749) {
      setPostsPerPage(6)
    }
    else if (windowSize >= 750 && windowSize <= 1279) {
      setPostsPerPage(8)
    }
    else if (windowSize >= 1280) {
      setPostsPerPage(10)
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  });



  return (
    <>
      <div className="min-h-screen h-full w-full flex  items-center flex-col relative overflow-hidden">

        <div className="h-16 w-full absolute  mt-10 px-2 flex justify-end max-w-7xl">
          <div className="w-full flex justify-end items-center">
            <div className="w-4 h-4 sm:w-6 sm:h-6 relative ">
              <Image
                src="/assets/translation.png"
                alt="flag"
                layout="fill"
                objectFit="contain"
              />

            </div>

            <select
              name="changeLocal"
              onChange={changeLanguage}
              defaultValue={locale}
              className="text-black  bg-transparent  text-xs sm:text-sm "
            >
              <option className="mx-2" value="en">
                English
              </option>
              <option className="" value="th">
                ภาษาไทย
              </option>
            </select>
          </div>

        </div>

        <section className="h-screen w-full   my-10 flex  flex-col items-center">
          <div className="relative w-52 sm:w-72 max-w-7xl  px-4 md:px-10">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              layout="responsive"
              width={100}
              height={50}
              objectFit="contain"
              className="drop-shadow-md"
            />

          </div>

          <div className="max-w-2xl w-full my-4  px-4 md:px-10">
            <p className="text-center text-sm font-light">
              The 300-meter retail spaces along charismatic Langsuan Road in Sindhorn Village Project. It comprises of 27 retail shops and Villa Market. Adjacent to Lumpini Park and 600 meters from Childlom BTS Station.</p>
          </div>

          <div className="h-full w-full  relative flex justify-center max-w-7xl">
            <HeroCarousel />

            <div className="bottom-14 absolute max-w-7xl w-full flex justify-center">

              <p className="text-white text-sm ">DISCOVER MORE</p>
            </div>

          </div>

        </section>

        <section className="min-h-screen h-full w-full flex justify-center px-4 md:px-10">

          <div className="max-w-7xl w-full h-full  ">

            <div className="w-full flex justify-around xl:justify-between flex-col sm:flex-row gap-3 items-center ">

              <h1 className="font-bold text-5xl">OUR VENDERS</h1>

              <div className="relative  ">

                <form className="flex items-center" >
                  <label htmlFor="simple-search" className="sr-only">Search Venders</label>
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      value={search}
                      onChange={(e) => setNewSearch(e.target.value)}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Search Venders"
                    />
                  </div>
                  <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                </form>



              </div>
            </div>

            <div className="w-full h-full  flex flex-col justify-center items-center relative">
              <div className="min-h-[240px] sm:min-h-[420px] h-fit w-full grid grid-cols-3 md:grid-cols-4  xl:grid-cols-5 gap-4 my-5 justify-items-center">

                {currentPosts.map((item, index) => (

                  <div key={index} className="w-28 h-28 sm:w-40 sm:h-40 md:w-44 lg:h-44 xl:w-52 xl:h-52  rounded-xl shadow overflow-hidden p-5">
                    <ShopCard data={item} />
                  </div>
                ))}

              </div>
              <div className="pb-10">
                <Pagination
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={filtered.length}
                  paginate={paginate}
                />
              </div>
            </div>



            <h1 className="font-bold text-5xl text-center">NEWS&EVENT</h1>

            <div className="h-72 sm:h-96 flex justify-center items-center my-5 ">
              <div className="w-full h-full relative overflow-hidden">

                <MyCarousel />
              </div>

            </div>

            <div className="h-72 md:h-[500px]  flex justify-center items-center my-10 relative">
              <div className="w-full h-full relative">
                <Image
                  src="/assets/ads.jpg"
                  alt="logo"
                  layout="fill"

                  objectPosition="top"
                  objectFit="cover"

                />

              </div>

            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 my-10">
              <div className="bg-slate-400 min-h-[500px] h-full row-start-2 lg:row-start-1 lg:col-span-2 relative">
                <Image
                  src="/assets/gallery.jpg"
                  alt="logo"
                  layout="fill"

                  objectPosition="center"
                  objectFit="cover"

                />
              </div>
              <div className=" w-full flex justify-center items-center flex-col py-5 lg:p-10 gap-3 row-start-1 lg:col-start-3">

                <h1 className="font-bold text-5xl text-center">GALLERY</h1>
                <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est, rem quis dicta, eos odit totam nisi voluptatum, mollitia sunt iste hic accusantium? Voluptate voluptates et repellendus, maiores vitae nesciunt!</p>
              </div>
            </div>

            <div className="my-10 ">

              <h1 className="font-bold text-5xl text-center">GET IN TOUCH</h1>

              <div className="h-72 sm:h-[500px] bg-slate-400 flex justify-center items-center my-5 relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.697198842956!2d100.54071681525494!3d13.736773501341597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f20ca76b90f%3A0x958d6748e59fc5f3!2sVelaa!5e0!3m2!1sen!2sth!4v1657079174288!5m2!1sen!2sth" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              </div>
              <div className="">
                <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias minus voluptatum sint assumenda omnis delectus rerum accusantium, ad eum corporis quisquam! Quasi dolorem necessitatibus nostrum ab exercitationem quia hic.</p>

              </div>
            </div>


          </div>
        </section>

      </div>
    </>
  )
}
