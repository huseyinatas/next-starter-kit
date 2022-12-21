import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SelectTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? "light" : theme;
  return currentTheme === 'light' ? setTheme('dark') : setTheme('light');
}

export default SelectTheme;