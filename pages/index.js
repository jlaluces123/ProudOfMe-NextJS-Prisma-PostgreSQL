import prisma from '../lib/prisma';
import PublicFeed from '../components/PublicFeed';
import { PlusIcon, BellIcon } from '@modulz/radix-icons';

export default function Home({ feed }) {
  return (
    <div className='bg-gray-100 min-h-screen h-full'>
      {/* Navigation */}
      <div className='bg-white h-24 flex items-center justify-between px-20'>
        <h1 className='text-4xl text-gray-800 font-extrabold cursor-pointer'>
          ProudOf.Me
        </h1>
        <div className='flex flex-row justify-evenly items-center w-1/5'>
          <button className='px-5 py-3 bg-blue-500 rounded-lg flex flex-row items-center'>
            <PlusIcon color='white' />
            <span className='text-white font-lg ml-2 font-semibold'>
              Create
            </span>
          </button>
          <button className='bg-gray-300 rounded-md h-8 w-8' />
          <button className='bg-gray-300 rounded-md h-8 w-8' />
          <button className='bg-blue-300 rounded-full h-14 w-14' />
        </div>
      </div>
      {/* Navigation End */}
      <PublicFeed feed={feed} />
    </div>
  );
}

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } };
};
