"use client"
import React, { useEffect, useState } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '../context/UserDetailContext';
import { useContext } from 'react';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const CreateUser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>()
  const {user} = useUser();

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
  }, [user])

  const CreateNewUser = async () => {
    if (user) {
      // Logic to create a new user
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? '',
        name: user?.fullName ?? '',
        imageUrl: user?.imageUrl ?? '',
        subscription: 'free' // or whatever default subscription you want
      });
      setUserDetail(result);
    }
  }

  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    <div>
      <Header/>
      {children}
    </div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUserDetail = () => {
  useContext(UserDetailContext);
}