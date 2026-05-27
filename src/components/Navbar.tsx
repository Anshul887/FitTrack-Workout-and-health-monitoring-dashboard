import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <div className='bg-blue-600 text-white p-4 flex justify-between'>
      <h1 className='text-2xl font-bold'>FitTrack</h1>

      <ThemeToggle />
    </div>
  );
};

export default Navbar;
