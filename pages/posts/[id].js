import Navigation from '../../components/Navigation';
import prisma from '../../lib/prisma';

export default function Post({ post }) {
  console.log('Post: ', post);

  return (
    <div className='bg-gray-50 min-h-screen h-full flex flex-col'>
      <Navigation />
      <div className='mx-20'>
        <div className='my-10 flex flex-row justify-between'>
          <span>
            posted <span className='font-bold'>//</span> 14 March 2022
          </span>
          <span>
            made by <span className='font-bold'>{post.author.name}</span>
          </span>
        </div>

        <article>
          <h1 className='font-extrabold text-5xl my-8'>{post.title}</h1>
          <p className='font-light tracking-wide leading-relaxed whitespace-pre-wrap'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quo
            nostrum eligendi molestiae hic temporibus aut ipsam incidunt tenetur
            porro earum illo delectus similique exercitationem at ad, id facilis
            minus magnam nam fugiat quibusdam vitae!
            <br />
            <br />
            Hic quidem tempora, dolore, quas delectus autem eaque cum repellat
            in exercitationem voluptatum explicabo! Corrupti, labore itaque
            consequatur necessitatibus reprehenderit officia? Reprehenderit
            placeat harum aliquid, eaque, sint iste assumenda nihil rem
            praesentium sunt incidunt, corrupti iure! Veniam nihil quam a
            numquam suscipit magnam minima molestiae!
          </p>
        </article>
      </div>
    </div>
  );
}

// grab post from database with corresponding id
export const getStaticPaths = async () => {
  const posts = await prisma.post.findMany();

  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
};

// create getStaticProps function
export const getStaticProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  console.log('post', post);
  return { props: { post } };
};
