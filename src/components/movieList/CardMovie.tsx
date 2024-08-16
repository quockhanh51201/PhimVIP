import { IMovie } from '../../interfaces/IMovie'
import showImg from '../../utils/showImg'

function CardMovie({ item }: { item: IMovie }) {
    return (
        <div className="w-[200px] h-[300px] rounded-md relative group">
            <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
            <img
                className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
                src={
                    showImg(item.poster_url)
                }
                alt={item.name} />
            <div className="absolute bottom-4 left-0 w-full flex justify-center items-center">
                <p className="uppercase text-lg text-white pr-2 pl-2 text-center">{
                    item.name || item.origin_name
                } - {item.year}</p>
            </div>
        </div>
    )
}

export default CardMovie