import { MagnifyingGlass } from 'phosphor-react';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function SearchInput({ searchQuery, setSearchQuery }: SearchInputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(event.currentTarget.value);
  }
  return (
    <label className='relative w-3/4 md:w-2/4 mt-[-30px] mx-[-25%] flex justify-center items-center rounded-2xl shadow-lg'>
      <MagnifyingGlass
        color='gray'
        className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none'
      />
      <input
        type='text'
        placeholder='Search'
        value={searchQuery}
        onChange={handleChange}
        className='w-full pl-9 pr-4 py-3 rounded-2xl border-slate-200 border-2 outline-none'
      />
    </label>
  );
}

export default SearchInput;
