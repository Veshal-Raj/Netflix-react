import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import PropTypes from 'prop-types';



const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        console.log(response);
        setMovies(response?.data?.results);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchURL]);
  console.log("movies -->", movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider"+rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider"+rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }
  

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute left-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={"slider"+rowID}
          className="scrollbar-hide relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap"
        >
          {console.log('cheking -->',movies)}
          {movies && movies.map((item, id) => <Movie key={id} item={item} id={item.id} />)}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
        
    </>
  );
};

// ... your existing code ...

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchURL: PropTypes.string.isRequired,
  rowID: PropTypes.string.isRequired,
};


export default Row;
