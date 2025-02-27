import { Link } from "react-router-dom";

const PostsCard = (props) => {

    // destructuring dell'oggetto props
    const { post } = props;

    // const menu = {
    //     name: "",
    //     image: "",
    //     ingredients: [],
    // };


    return (
        <>
            <div className='postItem'>
                <h2>{post.title}</h2>
                <img src={post.image} alt={post.name} />
                <p>{post.tags.join(", ")}</p>
                <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
            </div>

        </>
    )

}

export default PostsCard
