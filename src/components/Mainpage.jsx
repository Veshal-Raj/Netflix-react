import  { useEffect, useState } from "react";
import requests  from "../Requests";
import axios from "axios";

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestTrending).then((response) => {
            setMovies(response?.data?.results)
        })
    },[])
    console.log(movie)
    console.log('movies -->',movies)

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0,num)+'...';
        } else {
            return str;
        }
    }


    return (
        <div className="h-[600px] w-full text-white">
            <div className="h-full w-full">
            <div className='absolute h-[600px] w-full bg-gradient-to-r from-black'></div>
                <img 
                className="h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className="absolute top-[20%] w-full p-4 md:p-8">
                <h1 className="text-3xl font-bold md:text-5xl">{movie?.name}</h1>
                <div className="my-4">
                    <button className="border border-gray-300 bg-gray-300 px-5 py-2 text-black">Play</button>
                    <button className="ml-4 border  border-gray-300 px-5 py-2 text-white">Watch Later</button>

                </div>
                <p className="text-sm text-gray-400">Released: {movie?.first_air_date}</p>
                <p className="lg:max-[50%] xl:max-[35%] w-full text-gray-200 md:max-w-[70%]">{truncateString (movie?.overview, 150) }</p>
            </div>
            </div>
        </div>
    )
}

export default Main;