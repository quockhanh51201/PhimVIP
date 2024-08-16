function Header() {
    return (
        <div className="p-3 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <a href="#" className="text-[30px] text-red-600 uppercase font-bold">Movie</a>
                <nav className="flex items-center space-x-8">
                    <a href="#" className="text-white ">Home</a>
                    <a href="#" className="text-white ">About</a>
                    <a href="#" className="text-white ">Contact</a>
                </nav>
            </div>
            <div className="flex space-x-4">
                <input
                    className="p-2 rounded-md"
                    type="text"
                    placeholder="Search"
                />
                <button
                    className="p-2 text-white bg-red-600 rounded-md hover:bg-red-300"
                >
                    Search</button>
            </div>
        </div>
    )
}

export default Header