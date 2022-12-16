import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Movie from "./Movie";
import { getMovies } from "./redux/movieReducer";

export default function Movies() {
    const moviesState = useSelector(state => state.movieReducer.movies);
    const auth = useSelector(state => state.tokenReducer.key);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth == null)
            navigate('/login');
        else
            dispatch(getMovies());
    }, []);

    return (
        <div>
            {
                moviesState.map(movie => {
                    return <Movie title={movie.title} genre={movie.genre} />
                })
            }
        </div>
    );
}