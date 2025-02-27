import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext"

import PostsCard from "./PostsCard";

const PostsList = () => {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { menu } = useContext(GlobalContext);

    return (
        <>

            {
                menu.map((post) => (
                    <PostsCard key={post.id} post={post} />
                ))


            }
        </>
    )

}

export default PostsList
