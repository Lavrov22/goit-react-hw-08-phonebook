import { useSelector } from "react-redux";
import { selectName } from "redux/Auth/selectors";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Typography} from '@mui/material';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

export default function BackgroundLetterAvatars() {
   const name = useSelector(selectName);
  return (
    <Stack direction="row" spacing={2}>
      <Typography>Welcome</Typography>
      <Avatar {...stringAvatar(name)} sx={{ width: 24, height: 24 }}/>
    
    </Stack>
  );
}
