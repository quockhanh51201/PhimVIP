import { IMAGES } from "../../assets/image"

function ContentBanner() {
    return (
        <div className='w-full h-full flex items-center justify-center p-10 space-x-8 relative z-20'>
            <div className='w-[60%]'>
                <div className="flex flex-col space-y-6 items-baseline">
                    {/* <p className="text-white bg-gradient-to-r from-red-600 to-white py-2 px-3">
                        TV Show
                    </p> */}
                    <h2
                        className="text-white text-5xl"
                    >Tên Phim Là Thân Chém Gió</h2>
                    {/* <div className="flex items-center space-x-3">
                        <img className="w-8 h-8" src={IMAGES.rating} alt="rating" />
                        <img className="w-8 h-8" src={IMAGES.rating} alt="rating" />
                        <img className="w-8 h-8" src={IMAGES.rating} alt="rating" />
                        <img className="w-8 h-8" src={IMAGES.rating} alt="rating" />
                        <img className="w-8 h-8" src={IMAGES.rating_half} alt="rating" />
                    </div> */}
                    <p className="text-white ">
                        MAI xoay quanh câu chuyện về cuộc đời của một người phụ nữ cùng tên với bộ phim. Trên First-look Poster, Phương Anh Đào tạo ấn tượng mạnh với cái nhìn tĩnh lặng, xuyên thấu, đặc biệt, trên bờ môi nữ diễn viên là hình ảnh cô đang nằm nghiêng trên mặt nước. Được phủ một màn sương mờ ảo, poster đậm chất nghệ thuật của Mai gây tò mò với lời tựa: “Quá khứ chưa ngủ yên, ngày mai liệu sẽ đến?
                    </p>

                    <div className="space-x-4">
                        <button
                            className="p-2 text-white bg-black font-bold text-lg rounded-md"
                        >
                            Chi tiết
                        </button>
                        <button
                            className="p-2 text-white bg-red-600 font-bold text-lg rounded-md"
                            onClick={() => { console.log('first') }}
                        >
                            Xem phim
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[40%]'>
                <div className="flex justify-center items-center relative">
                    <div className="max-w-[400px] max-h-[700px]">
                        <div className="group w-full h-full relative">
                            <img
                                className='w-full h-full object-contain transition duration-500 ease-in-out group-hover:blur-[2px] shadow-lg shadow-black rounded-md'
                                alt="Avt Movie"
                                src='https://phimimg.com/upload/vod/20240423-1/7b281d88350fd638d84dc9abb5b6b0a6.jpg'
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-md">
                                <img className="w-16 h-16" src={IMAGES.icPlay} alt="icPlay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContentBanner