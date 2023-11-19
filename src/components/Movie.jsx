import { useState } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import PropTypes from "prop-types";

const Movie = ({ item }) => {
  const [urlId, setUrlId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const key = "4b158dbb480e612db7d470e0d08387c3";

  const handleMovieTrailer = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
      )
      .then((res) => {
        const Trailer = res.data.results.filter(
          (obj) => obj.type === "Trailer" && obj.site === "YouTube"
        );
        setUrlId(Trailer.length > 0 ? Trailer[0].key : null);
      })
      .catch((err) => {
        console.log(err);
        setUrlId(null);
      });
  };

  const handleHover = () => {
    setIsHovered(true);
    handleMovieTrailer(item?.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const opts = {
    height: "150",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div
      key={item.id}
      className="hover:scale-120 relative inline-block w-[160px] cursor-pointer p-2 transition-transform sm:w-[200px] md:w-[240px] lg:w-[280px]"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img
          className="block h-auto w-full"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.name}
        />

        {isHovered && urlId && (
          <div className="absolute inset-0 z-50 h-[300px] w-[400px] ">
            <div className="relative h-3/5 w-4/5">
              <Youtube videoId={urlId} opts={opts} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Movie.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.any.isRequired,
    backdrop_path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Movie;
