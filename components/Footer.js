import Link from "next/link";
import Image from 'next/image'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const scrollToTop = function () {
        scroll.scrollToTop();
    }


    return (
        <>
            <div className="w-full flex justify-center bg-black h-40  mt-10" >

                <section className=" w-full px-4 md:px-10 xl:px-0 max-w-7xl">
                    <div className="w-full flex justify-between border-b border-white">
                        <div className="relative w-32 py-4">
                            <Image
                                src="/assets/LOGO-W.svg"
                                alt="logo"
                                layout="responsive"
                                width={100}
                                height={50}
                                objectFit="contain"
                                className="drop-shadow-md"
                            />

                        </div>

                        <div className="hidden sm:flex py-2 flex-col justify-center items-center gap-3">


                            <button onClick={scrollToTop} className="w-16 h-16 rounded-full grid justify-items-center items-center ">
                                <svg width="48 " height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_11_13" fill="white">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M50 98C76.5097 98 98 76.5097 98 50C98 23.4903 76.5097 2 50 2C23.4903 2 2 23.4903 2 50C2 76.5097 23.4903 98 50 98ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" />
                                    </mask>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 98C76.5097 98 98 76.5097 98 50C98 23.4903 76.5097 2 50 2C23.4903 2 2 23.4903 2 50C2 76.5097 23.4903 98 50 98ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white" />
                                    <path d="M95 50C95 74.8528 74.8528 95 50 95V101C78.1665 101 101 78.1665 101 50H95ZM50 5C74.8528 5 95 25.1472 95 50H101C101 21.8335 78.1665 -1 50 -1V5ZM5 50C5 25.1472 25.1472 5 50 5V-1C21.8335 -1 -1 21.8335 -1 50H5ZM50 95C25.1472 95 5 74.8528 5 50H-1C-1 78.1665 21.8335 101 50 101V95ZM97 50C97 75.9574 75.9574 97 50 97V103C79.2711 103 103 79.2711 103 50H97ZM50 3C75.9574 3 97 24.0426 97 50H103C103 20.7289 79.2711 -3 50 -3V3ZM3 50C3 24.0426 24.0426 3 50 3V-3C20.7289 -3 -3 20.7289 -3 50H3ZM50 97C24.0426 97 3 75.9574 3 50H-3C-3 79.2711 20.7289 103 50 103V97Z" fill="white" mask="url(#path-1-inside-1_11_13)" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M39.3934 27.4853L48.9394 17.9393C49.5252 17.3536 50.4749 17.3536 51.0607 17.9393L60.6066 27.4853C61.1924 28.0711 61.1924 29.0208 60.6066 29.6066C60.0209 30.1924 59.0711 30.1924 58.4853 29.6066L51.5 22.6213L51.5 81L48.5 81L48.5 22.6213L41.5148 29.6066C40.929 30.1924 39.9792 30.1924 39.3934 29.6066C38.8077 29.0208 38.8077 28.0711 39.3934 27.4853Z" fill="white" />
                                </svg>

                            </button>

                            <p className="text-white text-xs font-light -mt-3">
                                SCROLL TO TOP
                            </p>

                        </div>


                        <div className="flex flex-col text-white py-4 gap-3">
                            <p className="font-light uppercase text-xs text-center">more channel to follow us</p>

                            <div className="inline-flex gap-2">
                                <div className="hover:scale-125 duration-300 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <Link href="https://www.facebook.com/VelaaSindhornVillageLangsuan">
                                        <a target="_blank" rel="noopener noreferrer" className="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="58"
                                                height="58"
                                                viewBox="0 0 32.84 32.84"
                                                className="cursor-pointer"
                                            >

                                                <path
                                                    id="Path_548020"
                                                    data-name="Path 548020"
                                                    d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                                                    transform="translate(-71.834 -38.578)"
                                                    fill="#000"
                                                />
                                            </svg>
                                        </a>
                                    </Link>

                                </div>
                                <div className="hover:scale-125 duration-300 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <Link href="https://www.instagram.com/velaalangsuan">
                                        <a target="_blank" rel="noopener noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 32.84 32.84"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="26"
                                                    height="24"
                                                    viewBox="0 0 32.84 32.84"
                                                >
                                                    <path
                                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                        fill="#000"
                                                        transform="translate(9 10)"
                                                    />
                                                </svg>
                                            </svg>
                                        </a>
                                    </Link>

                                </div>
                                <div className="hover:scale-125 duration-300 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <Link href="https://www.youtube.com/channel/UCTACNzlJexyjTD1s5H22Hwg">
                                        <a target="_blank" rel="noopener noreferrer">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 32.84 32.84">

                                                <path id="Path_548019" data-name="Path 548019" d="M130.083,60.409h0c-.039,0-3.858-.028-5.015-.157-.062-.014-.138-.025-.225-.037a2.076,2.076,0,0,1-1.411-.666,3.931,3.931,0,0,1-.575-1.619,26.408,26.408,0,0,1-.157-2.637V54.066c0-1.314.157-2.649.157-2.664a3.569,3.569,0,0,1,.582-1.616,2.011,2.011,0,0,1,1.432-.674h.041c2.041-.16,5.141-.188,5.171-.188s3.134.028,5.171.184h.07a1.878,1.878,0,0,1,1.411.672,3.929,3.929,0,0,1,.586,1.618c0,.015.156,1.348.156,2.664v1.227c0,1.288-.156,2.624-.156,2.636a3.952,3.952,0,0,1-.586,1.619,2.015,2.015,0,0,1-1.433.674h-.04c-2.048.189-5.148.191-5.179.191M128.3,52.03V57.7l4.837-2.772Z" transform="translate(-113.917 -38.578)" fill="#000" />
                                            </svg>
                                        </a>
                                    </Link>

                                </div>

                                <div className="hover:scale-125 duration-300 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <Link href="https://lin.ee/URizy9M">
                                        <a target="_blank" rel="noopener noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 33.492 33.499"
                                                className="cursor-pointer"
                                            >
                                                <path
                                                    id="Path_548022"
                                                    data-name="Path 548022"
                                                    d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
                                                    transform="translate(-197.758 -38.248)"

                                                    fill="#000"
                                                />
                                            </svg>
                                        </a>
                                    </Link>

                                </div>


                            </div>

                        </div>

                    </div>

                    <div className="h-fit py-2 flex justify-between items-center mt-2">

                        <p className="text-center sm:text-left text-white font-light text-xs">Copyright © 2022 , Siam Sindhorn Co.,Ltd. All Rights Reserved.</p>


                        <Link href={"https://siamsindhorn.com/privacy"}>

                            <a target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-center sm:text-right text-white font-light text-xs">Privacy Policy</a>
                        </Link>
                    </div>

                </section>


            </div>

        </>
    );
};

export default Footer;