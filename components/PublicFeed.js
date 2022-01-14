export default function PublicFeed({ feed }) {
  return (
    <div className='mx-20 py-20'>
      <h1 className='text-3xl font-extrabold'>Public Feed</h1>
      <ul className='h-full m-10 flex flex-col'>
        {feed.map((post) => {
          return (
            <div className='bg-white p-8 rounded-md my-4 mx-4' key={post.id}>
              <li key={post.id}>
                <div className='flex flex-row justify-between'>
                  <h2 className='text-xl font-bold hover:underline cursor-pointer'>
                    {post.title}
                  </h2>
                  <p className='font-lg font-semibold hover:underline cursor-pointer'>
                    <span className='text-gray-400 text-xs'>made by: </span>{' '}
                    {post.author.name}
                  </p>
                </div>
                <p className='mt-4 w-11/12 text-gray-600 truncate-3-lines'>
                  {post.content ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum ex dolores doloremque! Accusamus sint laboriosam consequuntur nobis! Quibusdam iure doloribus veritatis eum animi, officiis repellendus enim adipisci quas et, sapiente dolores voluptates a, cum itaque. Blanditiis sequi cum aut at nulla minus deserunt officia rerum, ratione iure, ut omnis magni voluptates quia cumque. Quibusdam saepe reprehenderit illo perspiciatis pariatur nesciunt ratione adipisci numquam iure at repellat sequi, alias consectetur ullam temporibus vero similique iste, animi ad dicta! Deleniti esse voluptate earum a dicta, quibusdam dignissimos ipsa maxime dolore dolorem iure, harum error minus rem! Possimus ducimus vero modi cumque!'}
                </p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
