/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import axios from 'axios';
import { Book, Review } from '../mocks/types';

type Props = {
  book: Book;
};

export default function Home({ book }: Props) {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  const handleGetReviews = async () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    const res = await axios.get('/reviews');
    // setReviews(res);
    setReviews(res.data);
  };
  console.log(book);

  return (
    <div>
      <img src={book.imageUrl} alt={book.title} width='250' />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button onClick={handleGetReviews}>Load reviews</button>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
              {/* <p>{book}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.ts`.
  const res = await axios.get('https://my.backend/book');
  // const book = await res.json();
  const book = res.data;

  return {
    props: {
      book,
    },
  };
}

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Head from 'next/head';
// import ItemList from './component/ItemList';

// const Index = () => {
//   // 임시 API URL
//   const API_URL =
//     'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
//   const API_URL2 = 'http://localhost:3000/api/hello';

//   // 상태 생성
//   const [list, setList] = useState([]);

//   // API 요청 후 상태에 저장
//   const getData = () => {
//     axios.get(API_URL).then((res) => {
//       console.log(res.data.slice(1, 28));
//       const slice_arr = res.data.slice(1, 28);
//       setList(slice_arr);
//     });
//     getUser();
//   };
//   const getUser = () => {
//     axios.post(API_URL2, { name: 'ryu' });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <Head>
//         <title>Next</title>
//       </Head>
//       <p>Hello Next.js</p>
//       {/* // 아이템 리스트 컴포넌트 추가 및 프롭스로 list 전달 */}
//       <ItemList data={list} />
//     </div>
//   );
// };

// export default Index;
