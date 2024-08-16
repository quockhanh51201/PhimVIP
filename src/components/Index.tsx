import Banner from './banner/Banner';
import Header from './header/Header';
import MovieList from './movieList/MovieList';
import VideoPlayer from './Test';

function Index() {
    // Danh sách các tiêu đề và URL tương ứng
    const movieLists = [
        { title: 'Phim mới', url: 'Phim moi cap nhat' },
        { title: 'Phim Lẻ', url: 'Phim le' },
        { title: 'Phim bộ', url: 'Phim bo' },
        { title: 'Phim hoạt hình', url: 'Hoat hinh' },
        { title: 'TV Show', url: 'TV Show' }
    ];

    return (
        <div className='bg-black pb-10'>
            <Header />
            <Banner />
            {movieLists.map((movieList, index) => (
                <MovieList
                    key={index}
                    title={movieList.title}
                    url={movieList.url}
                />
            ))}
            <VideoPlayer />
        </div>
    );
}

export default Index;
