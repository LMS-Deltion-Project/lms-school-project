import Btn from "../../components/btn";
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

function render() {
    return (
        <>
            <div className="bg-home h-screen w-screen bg-center bg-cover md:p-9 sm:p-8 relative">
                <img src="./logo.png" alt="logo-image" className="w-40" />
                <div className="w-96 text-white md:pl-24 sm:pt-28 xs:w-full xs:h-1/3 flex flex-col xs:justify-end">
                    <div className="text-5xl xs:text-4xl xs:text-center xs:font-bold">
                        Learn & Share
                    </div>
                    <div className="text-2xl xs:text-center">
                        Start creating your own course by creating an account
                    </div>
                    <div className="flex justify-center">
                        <Btn text="Get started" extraClasses="mt-2 w-full justify-center xs:w-[75%] xs:text-center" link="/test">
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
            <div>
                
            </div>
        </>
    )
}

export default render;