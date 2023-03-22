import { Link } from "react-router-dom";

function render() {
    return (<>
        <div className="w-full flex bg-[#363636] mt-2 text-white p-1 justify-between">
            <div className="underline flex xs:flex-col">
                <Link to="/browse" className="mr-3">Browse</Link>
                <Link to="/my-progress" className="mr-3">My progress</Link>
                <Link to="/instructor-dashboard" className="mr-3">Instructor Dashboard</Link>
                <Link to="/privacy-policy" className="mr-3">Privacy Policy</Link>
            </div>
            <div className="flex xs:flex-col">
                <img src="/logo.png" alt="logo" className="w-20 bg-white rounded mb-2 hidden xs:flex"/>
                <p className="xs:text-xs ">© Ludo Tielbeke & Gido Koning 2022</p>
            </div>
        </div>
    </>)
}

export default render