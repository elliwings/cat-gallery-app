import Banner from '../Banner/Banner';
import SearchInput from './SearchInput';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function Search({ searchQuery, setSearchQuery }: SearchProps) {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-5 px-10 md:px-15 lg:px-20'>
      <Banner />
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default Search;
