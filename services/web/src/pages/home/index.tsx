import Btn from "../../components/btn"
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import Footer from "../../components/footer";
import MobileMenu from "../../components/mobileMenu";

const links = {
    development: {
        name: "development",
        link:"/browse?category=development"
    },

}
function render() {
    return (
        <>
            <div className="bg-home h-screen w-screen bg-center bg-cover md:p-9 sm:p-8 z-0">
                <div className="flex justify-between items-center">
                    <img src="./logo.png" alt="logo-image" className="w-40"/>
                    <div className="h-full flex ">
                        <MobileMenu />
                    </div>

                </div>
                <div className="w-96 text-white md:pl-24 sm:pt-28 xs:w-full xs:h-1/3 flex flex-col xs:justify-end">
                    <div className="text-5xl xs:text-4xl xs:text-center xs:font-bold">
                        Learn & Share
                    </div>
                    <div className="text-2xl xs:text-center">
                        Start creating your own course by creating an account
                    </div>
                    <div className="flex justify-center">
                        <Btn text="Get started" extraStyles="mt-2 w-full xs:w-[75%] xs:text-center" link="/test">
                            <ChevronRightIcon className="w-[22px] ml-2 inline-flex"/>
                        </Btn>
                    </div>
                </div>
                <div className="absolute w-1/2 left-0 bottom-10 w-full">
                    <div className="text-white ">
                        <div className=" w-fit mx-auto">
                            Scroll down to browse
                            <ChevronDownIcon className="text-white mt-3 mx-auto animate-bounce w-[35px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-[10%] pt-9 flex items-center flex-col">
                <Btn text="Browse" extraStyles="w-48 flex text-2xl xs:hidden" link="/browse">
                    <ChevronRightIcon className="w-[36px] ml-2 inline-flex "/>
                </Btn>

                <Btn text="Browse" extraStyles="w-48 flex text-2xl" link="/browse">
                    <ChevronRightIcon className="w-[36px] ml-2 inline-flex "/>
                </Btn>

            </div>
            <Footer />
        </>
    )
}

export default render;