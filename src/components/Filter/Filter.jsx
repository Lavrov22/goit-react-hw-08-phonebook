import { useSelector, useDispatch } from "react-redux";
import { findContacts } from "redux/contacts/filterSlice";
import { selectFilter } from "redux/contacts/selectors";
import {
  FormControl,
  InputLabel,
  Box,
  Input,
  Typography,
  FormGroup

} from '@mui/material';

export const Filter = () => {

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const filterChange = e => {
    const { value } = e.currentTarget;
    dispatch(findContacts(value));
  };


  return (
      
      <Box
        sx={{ display: 'block', mt: 1, }}
        component="form"
      >
        <FormGroup >
          <Typography variant="h5" component="h1" sx={{ textAlign: 'center', mt: 2 }}>
            Find contacts by name
          </Typography>
          <FormControl sx={{ m: 1, width: '300px', mx: 'auto'}} variant="filled">
            <InputLabel  htmlFor='filter'>Filter</InputLabel>
            <Input
              type="text"
              name="filter"
              value={filter}
              onChange={filterChange}
            />
        
          </FormControl>
        </FormGroup>
      </Box>
  );

};

