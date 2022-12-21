import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import tw from 'tailwind-styled-components';
import Icon from 'components/UI/Icon';
import SelectTheme from 'hooks/SelectTheme';

function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === 'system' ? 'light' : theme;

  return (
    <Button onClick={() => (currentTheme === 'light' ? setTheme('dark') : setTheme('light'))}>
      {' '}
      <Icon name="check_box" />
      {' '}
      Temayı Değiştir
      {' '}
    </Button>
  );
}

const Button = tw.button`
     flex
     items-center
     px-8
     py-2
     bg-white
     rounded-full
     shadow
     hover:shadow-lg
     focus:outline-none
     focus:ring-2
     focus:ring-offset-2
     text-gray-800
     `;

export default ThemeSelector;
