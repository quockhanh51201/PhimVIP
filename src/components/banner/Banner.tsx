import ContentBanner from './ContentBanner'
function Banner() {
    return (
        <div className='p-4'>
            <div
                className="bg-[url('https://phimimg.com/upload/vod/20240423-1/7b281d88350fd638d84dc9abb5b6b0a6.jpg')]
                bg-no-repeat bg-center bg-cover h-[800px] relative rounded-[25px]"
            >
                <div className='absolute top-0 left-0 h-full w-full bg-black opacity-50 pointer-events-none z-10' />
                <ContentBanner />
            </div>
        </div>

    )
}

export default Banner