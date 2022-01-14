import prisma from '../lib/prisma';

export default function Home({ feed }) {
  return (
    <div>
      <h1 className='text-3xl'>Public Feed</h1>
      <ul>
        {feed.map((post) => {
          return (
            <li key={post.id}>
              <div>
                <h2>{post.title}</h2>
                <p>by - {post.author.name}</p>
              </div>
              <p>{post.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } };
};
