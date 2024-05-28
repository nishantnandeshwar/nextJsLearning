'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const user = () => {
  const { data, error } = useSWR('https://dummyjson.com/users', fetcher);
  if (error) {
    return <h1>Error!!! </h1>;
  }
  if (!data) {
    return <h1>Loading!!! </h1>;
  }

  // const [user, setUser] = useState<any>([]);
  // useEffect(() => {
  //   async function userAPICall() {
  //     const userApi = await fetch('https://dummyjson.com/users');
  //     setUser(await userApi.json());
  //   }
  //   userAPICall();
  // }, []);
  // console.log('data>>', user);
  return (
    <div>
      <h2> user list</h2>
      {data &&
        data?.users &&
        data?.users?.map((item: any, id: number) => (
          <Link key={id} href={`/users/${item.id}`}>
            <div> {item?.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default user;
