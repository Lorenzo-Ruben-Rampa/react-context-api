import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext"

import PostsCard from "./PostsCard";

const PostsList = () => {
    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { menu } = useContext(GlobalContext);

    return (
        <>
            {
                menu.map((Post) => (
                    <div className='PostItem' key={Post.id}>
                        <h2>{Post.title}</h2>
                        <img className="centered mini" src={Post.image} alt={Post.title} />
                        <p className="centered">{Post.tags.join(", ")}</p>
                        <Link to={`/post/${Post.id}`} className="centered">Vai al dettaglio</Link>
                    </div>
                ))

        </>
    )
}

export default PostsList
