import React from 'react';
import axios from 'axios';

const Detail = ({ item }: any) => {
  return (
    <div className='Detail'>
      <h1>{item.name}</h1>
      <p>{item.brand}</p>
      <p>{item.id}번째 게시글</p>
    </div>
  );
};

export default Detail;

export const getServerSideProps = async (ctx: any) => {
  const id = ctx.params.id;
  const res = await axios.get(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  );
  const data = res.data;

  console.log(data); // 해당 콘솔은 어디에서 출력이 되나요?

  return {
    props: {
      item: data,
    },
  };
};
