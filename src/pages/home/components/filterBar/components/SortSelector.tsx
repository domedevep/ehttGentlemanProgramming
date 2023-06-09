import { MenuItem, Select, Stack } from '@mui/material';
import usePersonListStore from '../../../../../stores/personListStore/personListStore';
import sortOptionsInModal from '../../../../../utils/sortOptionsInModal';
import { SortOption } from '../../../../../models/personListSortOptions';

const SortSelector = () => {
  const { sortOption, sortPersonList } = usePersonListStore();

  return (
    <Stack flex="2.5">
      <Select
        value={sortOption}
        label="order"
        onChange={(e) => sortPersonList(e.target.value as SortOption)}>
        {sortOptionsInModal.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default SortSelector;
