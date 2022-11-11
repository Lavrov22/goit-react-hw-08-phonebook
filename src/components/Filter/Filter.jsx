import { useSelector, useDispatch } from "react-redux";
import { findContacts } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";
import { FilterLabel, FilterInput } from "components/Filter/Filter.styled";

export const Filter = () => {

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const filterChange = e => {
    const { value } = e.currentTarget;
    dispatch(findContacts(value));
  };


    return (
        <FilterLabel>
          Find contacts by name
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={filterChange}
          />
        </FilterLabel>
    )

};

