import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link'; 


type Category = {
  label: string;
  link?: string;
};
const categories : Category[] = [
  { label: 'Select Category'},
  { label: 'Bear Hunting', link: '/category-1-link' },
  { label: 'Bird Descriptions', link: '/category-2-link' },
  { label: 'Birdtail Waterfowl', link: '/category-3-link' },
  { label: 'Diver Duck Hunting', link: '/category-4-link' },
  { label: 'Duck Hunting', link: '/category-5-link' },
  { label: 'Fishing', link: '/category-6-link' },
  { label: 'Hunting Equipment', link: '/category-7-link' },
  { label: 'Manitoba, Canada', link: '/category-8-link' },
  { label: 'Off Season', link: '/category-9-link' },
  { label: 'Plan Your Hunt', link: '/category-10-link' },
  { label: 'The Experince', link: '/category-11-link' },

];

const CustomDropdown = () => {
  const [category, setCategory] = React.useState('Select Category');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ width: '20%', minWidth: 120 }}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" sx={{ fontSize: '1.5rem', color: 'black' }}>Select a Category</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Select Category"
          onChange={handleChange}
        >
          {categories.map((item) => (
  <MenuItem key={item.label} value={item.label}>
    {item.label === 'Select Category' ? (
      item.label
    ) : (
      <Link href={item.link}>
        {item.label}
      </Link>
    )}
  </MenuItem>
))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomDropdown;

