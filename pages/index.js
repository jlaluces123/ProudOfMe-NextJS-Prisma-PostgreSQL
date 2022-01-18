import prisma from '../lib/prisma';
import PublicFeed from '../components/PublicFeed';
import Navigation from '../components/Navigation';

export default function Home({ feed }) {
  return (
    <div className='bg-gray-50 min-h-screen h-full'>
      <Navigation />
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
