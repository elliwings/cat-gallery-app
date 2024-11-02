import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className='flex flex-col justify-center items-center gap-4 pt-6 px-4 mb-10'>
        <span className='text-[#6941c6] font-medium bg-[#f0e7ff] py-1 px-3 rounded-2xl text-sm md:text-base'>
          Our Gallery
        </span>
        <h1 className='text-3xl md:text-5xl text-[#42307d] font-semibold text-center'>
          A Stunning Cat Gallery
        </h1>
        <p className='text-lg sm:text-xl font-light text-[#6941c6] text-center'>
          Discover a captivating collection of adorable cats.
        </p>
      </div>
    </header>
  );
};

export default Header;
