import { useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className='bg-white text-black px-4 py-2 rounded'
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
