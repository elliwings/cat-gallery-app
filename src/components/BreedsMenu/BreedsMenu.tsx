interface BreedsProps {
  breeds: string[];
  setSelectedBreed: (query: string) => void;
  selectedBreed: string;
}

function BreedsMenu({ setSelectedBreed, breeds, selectedBreed }: BreedsProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setSelectedBreed(event.currentTarget.value);
  }

  return (
    <select
      value={selectedBreed}
      onChange={handleChange}
      className='p-2 border rounded'
    >
      <option value=''>All breeds</option>
      {breeds.length > 0 ? (
        breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))
      ) : (
        <option value='' disabled>
          No breeds available
        </option>
      )}
    </select>
  );
}

export default BreedsMenu;
