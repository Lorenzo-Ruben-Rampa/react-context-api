// import { Link } from "react-router-dom";

export default function PostCard({ menu }) {
    return (
        <>
            {
                menu.map((post) => (
                    <div className='postItem'>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.tags.join(", ")}</p>
                        <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
                    </div>

        </>
    )
}

// const PizzasCard = (props) => {

//     // destructuring dell'oggetto props
//     const { pizza } = props;
