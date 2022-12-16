import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Movies from "./Movies";
import { getUser } from "./redux/userReducer";

const Welcome = () => {
    const userState = useSelector(state => state.userReducer.user);
    const auth = useSelector(state => state.tokenReducer.key);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth == null)
            navigate('/login');
        else
            dispatch(getUser());
    }, []);

    return (
        <>
            <p>First name: {userState.firstname}</p>
            <p>Last name: {userState.lastname}</p>
            <p>Email: {userState.email}</p>
            <hr />
            <Movies />
        </>
    );

}

export default Welcome;