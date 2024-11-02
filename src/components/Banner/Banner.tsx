import banner from '../../assets/banner.jpg';

function Banner() {
  return (
    <img
      src={banner}
      alt='banner'
      className='w-full h-[240px] md:h-[312px] object-cover rounded-2xl opacity-60'
    />
  );
}

export default Banner;
