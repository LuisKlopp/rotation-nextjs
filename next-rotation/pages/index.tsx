import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ItemList from './component/ItemList';

const Index = () => {
  // 임시 API URL
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  // 상태 생성
  const [list, setList] = useState([]);

  // API 요청 후 상태에 저장
  const getData = () => {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Next</title>
      </Head>
      <p>Hello Next.js</p>
      {/* // 아이템 리스트 컴포넌트 추가 및 프롭스로 list 전달 */}
      <ItemList data={list} />
    </div>
  );
};

export default Index;
