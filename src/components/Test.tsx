import ReactPlayer from 'react-player';
function VideoPlayer() {
    return (
        <div className="flex text-red-500 justify-center items-center">
            <ReactPlayer width={'90%'} height={'90%'} url="https://s3.phim1280.tv/20240319/ym2SFUf0/index.m3u8" controls />
        </div>
    );
}

export default VideoPlayer;
