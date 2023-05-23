import React,{useState} from 'react';
import { Inter } from 'next/font/google'
import os from 'os' // node modules
// app folder 에 있는건 모두 서버 컴포넌트이다. 빌드시 실행됨.
import Counter from '../componenets/Couter'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(os.hostname());
  console.log('서버 컴포넌트');
  return (
      <>
      <h1>홈페이지다!!</h1>
        <Counter/>
      </>
  )
}
