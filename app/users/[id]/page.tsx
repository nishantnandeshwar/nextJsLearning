'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

const userInfo = () => {
  const [userInfo, setUserInfo] = useState<any>('');
  const path = usePathname();
  const id = path.split('/users/')[1];
  useEffect(() => {
    async function userAPICall(id: string) {
      const userInfoApi = await fetch(`https://dummyjson.com/users/${id}`);
      setUserInfo(await userInfoApi.json());
    }
    userAPICall(id);
  }, [id]);
  console.log('userInfo>>', userInfo);
  return (
    <div>
      <h1>userInfo list</h1>
      {userInfo?.firstName}
      {userInfo?.lastName}
    </div>
  );
};

export default userInfo;
