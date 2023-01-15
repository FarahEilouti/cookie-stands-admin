"use client";
import { Inter } from '@next/font/google'
import Form from './components/form'
import LoginForm from './components/LoginForm';
import {useContext} from 'react';
import { AuthContext } from './contexts/auth';
const inter = Inter({ subsets: ['latin'] })

// starter code
export default function Home() {
  const {tokens} = useContext(AuthContext);
  return (
     <>
    {tokens ? <> <Form /></> : <LoginForm />}
    </>
    
    
  )
}
