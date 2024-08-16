import Banner from './banner/Banner';
import Header from './header/Header';
import MovieList from './movieList/MovieList';
import VideoPlayer from './Test';

function Index() {
    return (
        <div className='bg-black pb-10'>
            <Header />
            <Banner />
            <MovieList
                title='Phim mới'
                url='Phim moi cap nhat'
            />
            <MovieList
                title='Phim lẻ'
                url='Phim le'
            />
            <MovieList
                title='Phim bộ'
                url='Phim bo'
            />
            <MovieList
                title='Phim hoạt hình'
                url='Hoat hinh'
            />
            <MovieList
                title='TV Show'
                url='TV Show'
            />
            <VideoPlayer />
        </div>
    );
}

export default Index;
