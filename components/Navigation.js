import { PlusIcon, BellIcon } from '@modulz/radix-icons';

export default function Navigation({ loggedIn, user }) {
  return (
    <div className='bg-white h-24 flex items-center justify-between px-20'>
      <h1 className='text-4xl text-gray-800 font-extrabold cursor-pointer'>
        ProudOf.Me
      </h1>
      <button className='px-5 py-3 bg-blue-500 rounded-lg flex flex-row items-center'>
        <PlusIcon color='white' />
        <span className='text-white font-lg ml-2 font-semibold'>Create</span>
      </button>
    </div>
  );
}
