import { GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';

interface IItem {
  item: {
    api_featured_image: string;
    brand: string;
    category: string;
    created_at: string;
    currency: null;
    description: string;
    id: number;
    image_link: string;
    name: string;
    price: string;
    price_sign: null;
    product_api_url: string;
    product_colors: [];
    product_link: string;
    product_type: string;
    rating: number;
    tag_list: [];
    updated_at: string;
    website_link: string;
  };
}

const DetailStatic = ({ item }: IItem) => {
  return (
    <div>
      {item && (
        <div className='Detail'>
          <h1 style={{ color: '#fff' }}>with Static Generation</h1>
          <h1>{item.created_at}</h1>
          <p>{item.product_type}</p>
          <p>{item.id}번째 게시글</p>
        </div>
      )}
    </div>
  );
};

export default DetailStatic;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // context 객체 내부에는 params, url, query 등 다양한 정보가 존재
//   // console.log(context);
//   const id = context.params ? context.params.id : null;
//   const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
//   const response = await axios.get(API_URL);
//   const data = response.data;

//   return {
//     props: {
//       item: data,
//     },
//   };
// };

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (ctx: any) => {
  const id = ctx.params.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
};
