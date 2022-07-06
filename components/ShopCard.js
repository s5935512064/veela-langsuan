
import React, { useState, useEffect, useRef, Fragment } from "react";
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'





const ShopCard = (props) => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        console.log(props);
        setIsOpen(true)
    }





    return (
        <>
            <div className="h-full relative ">
                <Image
                    src="/assets/shoplogo/BKK-07.png"
                    alt="logo"
                    layout="fill"
                    objectFit="contain"

                />

                <button className="bg-transparent h-full w-full flex justify-center items-center absolute z-10" onClick={openModal}>
                    Click
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center relative">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <Dialog.Panel className="w-full max-w-[850px]  md:max-h-[85vh] h-full transform overflow-hidden rounded-2xl bg-white p-6 md:p-14 text-left align-middle shadow-xl transition-all relative">

                                    <div className="absolute  flex justify-end right-5 top-5">
                                        <button onClick={closeModal} className="z-50">
                                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
                                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                            </svg>
                                        </button>

                                    </div>


                                    <div className="md:max-h-56 w-full  gap-3 grid grid-cols-1 md:grid-cols-2">
                                        <div className=" flex justify-center items-center">
                                            <div className="w-36 h-36 md:w-56 md:h-56 rounded-full  relative">
                                                <Image
                                                    src="/assets/shoplogo/BKK-07.png"
                                                    alt="logo"
                                                    layout="fill"
                                                    objectFit="contain"

                                                />
                                            </div>
                                        </div>

                                        <div className=" flex flex-col gap-3 justify-center">

                                            <Dialog.Title
                                                as="h3"
                                                className=" text-2xl md:text-4xl font-bold text-center uppercase  "
                                            >
                                                Izakaya Teppen BBQ&Sushi Premium
                                            </Dialog.Title>

                                            <div className="flex justify-center gap-3">
                                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-slate-200 ">

                                                </div>
                                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-slate-200">

                                                </div>
                                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-slate-200">

                                                </div>

                                            </div>
                                            <p className="text-sm text-gray-500 font-light px-5 text-center">An entertainment-style Japanese casual dinning restaurant and bar, where you can enjoy the menu from several restaurants all over Japan and world!!</p>
                                        </div>
                                    </div>



                                    <div className="md:mt-2 h-32 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center ">
                                        <div>

                                            <p className="text-sm text-gray-500 font-light">
                                                Monday - Thursday 11:00-23:00 <br></br>
                                                Saturday - Sunday 11:00-23:00<br></br>
                                                สำรองที่นั่ง - 02-xxx-xxxx
                                            </p>
                                        </div>
                                        <div className="flex justify-center gap-3">
                                            <div className="w-12 h-12 bg-black rounded-full">

                                            </div>
                                            <div className="w-12 h-12 bg-black rounded-full">

                                            </div>
                                            <div className="w-12 h-12 bg-black rounded-full">

                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-52 w-full grid md:grid-cols-3 gap-3 mt-5">
                                        <div className="h-full relative">
                                            <Image
                                                src="/assets/shoplogo/1.jpg"
                                                alt="logo"
                                                layout="fill"
                                                objectFit="cover"

                                            />


                                        </div>
                                        <div className="hidden md:block h-full  relative">
                                            <Image
                                                src="/assets/shoplogo/2.jpg"
                                                alt="logo"
                                                layout="fill"
                                                objectFit="cover"

                                            />

                                        </div>
                                        <div className="hidden md:block h-full  relative">
                                            <Image
                                                src="/assets/shoplogo/3.jpg"
                                                alt="logo"
                                                layout="fill"
                                                objectFit="cover"

                                            />

                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    );
}

export default ShopCard;