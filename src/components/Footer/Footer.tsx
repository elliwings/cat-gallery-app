const Footer = () => {
  return (
    <footer className='w-full bg-gray-800 text-white py-8 mt-10'>
      <div className=' mx-auto text-center'>
        <p className='mb-2'>Thank you for visiting our site! Stay connected!</p>
        <div className='flex justify-center space-x-4'>
          <a href='https://facebook.com' className='hover:text-gray-400'>
            Facebook
          </a>
          <a href='https://twitter.com' className='hover:text-gray-400'>
            Twitter
          </a>
          <a href='https://instagram.com' className='hover:text-gray-400'>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
