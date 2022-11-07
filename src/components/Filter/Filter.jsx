import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "redux/actions";
import { getFilter } from "redux/selectors";
import { FilterLabel, FilterInput } from "components/Filter/Filter.styled";

export const Filter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const filterChange = e => {
    const { value } = e.currentTarget;
    dispatch(changeFilter(value));
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

