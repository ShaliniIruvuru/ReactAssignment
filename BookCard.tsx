import React from 'react';
import Card from '@mui/material/Card'
import ChildCard from './ChildCard';


const Bookcard = ({ item, updateBook }: any) => {
  return (
    <div>
      <Card sx={{ width: 350 }} data-testid='bookCard'>
      <ChildCard item={item} updateBook={updateBook} />
      </Card>

    </div>
  );
}

export default Bookcard;
