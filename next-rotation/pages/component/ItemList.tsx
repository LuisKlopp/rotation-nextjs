import Link from 'next/link';

interface IInfo {
  id: number;
  name: string;
}

export interface IProps {
  data: IInfo[];
}

const ItemList = ({ data }: IProps) => {
  return (
    <div>
      {data.map((data) => (
        <Link href={`/detail/${data.id}`} key={data.id}>
          <div key={data.id}>{data.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
