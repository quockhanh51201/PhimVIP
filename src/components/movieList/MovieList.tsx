import { useEffect, useState } from "react"
import API_URL from '../../api/api_url'
import getListMovie from "../../api/api_Movie"
import CardMovie from "./CardMovie"
import { IMovie } from "../../interfaces/IMovie"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

interface Props {
    title: string;
    url: "Phim moi cap nhat" | "Phim le" | "Phim bo" | "Hoat hinh" | "TV Show";
}
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 8
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};

function MovieList({ title, url }: Props) {
    const ListUrl: Record<string, string> = {
        "Phim le": API_URL.getPhimLe(1),
        "Phim moi cap nhat": API_URL.getPhimMoi(1),
        "Phim bo": API_URL.getPhimBo(1),
        "Hoat hinh": API_URL.getPhimHoatHinh(1),
        "TV Show": API_URL.getTVShow(1)
    };
    const [listMovie, setListMovie] = useState<{ data: { items: IMovie[] } }>({ data: { items: [] } });
    const [listMovieMoi, setListMovieMoi] = useState<{ items: IMovie[] }>({ items: [] });
    function getUrlByTitle(url: string) {
        return ListUrl[url] || "https://example.com/default-url";

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getListMovie({ url: getUrlByTitle(url) });
                url !== 'Phim moi cap nhat' ? setListMovie(data) : setListMovieMoi(data)
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pl-4 pt-10">
            <div className="flex cursor-pointer justify-between pr-4">
                <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
                <h2 className="text-white text-xl font-bold mb-4 cursor-pointer ">Xem thêm</h2>
            </div>
            <div className="items-center">
                {
                    url !== 'Phim moi cap nhat'
                        ?
                        listMovie.data.items.length > 0 ? (
                            <Carousel responsive={responsive} >
                                {
                                    listMovie.data.items.map((item) => (
                                        <CardMovie key={item._id} item={item} />
                                    ))
                                }
                            </Carousel>

                        ) : (
                            <p className="text-white">No movies available.</p>
                        )
                        :
                        listMovieMoi.items.length > 0 ? (
                            <Carousel responsive={responsive}>
                                {
                                    listMovieMoi.items.map((item) => (
                                        <CardMovie key={item._id} item={item} />
                                    ))
                                }
                            </Carousel>
                        ) : (
                            <p className="text-white">No movies available.</p>
                        )
                }
            </div>
        </div >
    );
}

export default MovieList;
