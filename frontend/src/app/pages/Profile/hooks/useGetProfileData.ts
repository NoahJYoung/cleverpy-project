import React, { useState, useEffect, useCallback } from 'react'
import { useRecoilState } from 'recoil';
import { API } from 'src/api';
import { PostData } from 'src/api/requests/posts'
import { UserData } from 'src/api/requests/users';
import { globalLoadingState } from 'src/app/state';

export const useGetProfileData = (userId: number) => {
    const [userPosts, setUserPosts] = useState<PostData[]>([]);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useRecoilState(globalLoadingState);

    useEffect(() => {
        const fetchUserData = async () => {
            const res = await API.users.getById(userId);
            res && setUserData(res);
        };
        const fetchPosts = async () => {
            const res = await API.posts.getByUserId(userId);
            res && setUserPosts(res);
        };
        setLoading(true);
        fetchUserData();
        fetchPosts();
        setLoading(false);
    }, []);

    return {
        userData,
        userPosts
    }
}

