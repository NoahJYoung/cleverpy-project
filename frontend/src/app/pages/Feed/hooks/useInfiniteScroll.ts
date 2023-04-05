import React, { useEffect, useState } from "react";
import { useRecoilState } from 'recoil';
import { API } from "src/api";
import { postsState } from "src/app/state";

/*
    If the backend were prepared to handle paginated queries, this would be the place to apply that logic.
*/

export const useInfiniteScroll = () => {
    const [posts, setPosts] = useRecoilState(postsState);
    const [recordCount, setRecordCount] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await API.posts.getAll();
            res && setPosts(res);
        }
        fetchPosts();
    }, []);

    return {
        posts: posts.slice(0, recordCount),
        setRecordCount,
    }
}