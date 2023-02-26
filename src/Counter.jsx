import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  return (
    <div>
      <IconButton color="primary" onClick={() => setLike(like + 1)} aria-label="like button">
      <Badge badgeContent={like} color="primary">
      👍
      </Badge>
      </IconButton>

      <IconButton color="error" onClick={() => setDisLike(dislike + 1)} aria-label="dislike button">
      <Badge badgeContent={dislike} color="error">
      👎
      </Badge>
      </IconButton>
  
  
      
    

    </div>
  );
}
