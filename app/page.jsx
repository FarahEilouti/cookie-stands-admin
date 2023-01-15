"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Form from './components/form'

const inter = Inter({ subsets: ['latin'] })

// starter code
export default function Home() {
  return (
    <div>
     <Form/> 
    </div>
  )
}
