export default function Movie(props){
    return(
        <div>
            Title: {props.title}
            <br />
            Genre: {props.genre}
            <br />
            ===========================
            <br />
        </div>
    );
}