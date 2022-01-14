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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  iure, in nulla fuga culpa eum dolore excepturi nobis
                  consequuntur quo quasi veniam. Distinctio voluptatibus optio
                  provident nostrum magnam sint facere quam temporibus officia
                  non ratione, rem eveniet, porro aliquam ea expedita commodi
                  ducimus nisi iure voluptas necessitatibus! Hic reiciendis,
                  ratione nisi illo ea officia, adipisci similique inventore
                  quos quas, praesentium nulla nemo enim error. Aperiam tempore
                  id harum doloribus. Quos harum sequi, amet vel cupiditate
                  repellendus! Dicta blanditiis asperiores corporis beatae natus
                  iste quae eveniet maiores explicabo esse quibusdam, molestias
                  distinctio. Vitae culpa eos, quidem unde repudiandae quo
                  magnam autem.
                </p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
