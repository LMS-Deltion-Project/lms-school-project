import Btn from "../../components/btn";

function render() {
    return (
        <>
            <div className="bg-home h-screen w-screen bg-center bg-cover md:p-9 sm:p-8">
                <img src="./logo.png" alt="logo-image" className="w-40" />
                <div className="w-96 text-white md:pl-24 sm:pt-28 ">
                    <div className="text-6xl">
                        Slogan text
                    </div>
                    <div className="text-2xl">
                        Start creating your own course by creating an account
                    </div>
                    <Btn text="sdf" extraClasses="m-3" link="/test" />
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default render;