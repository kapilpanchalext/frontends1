import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import {
  GridColumnMenu,
  GridColumnMenuProps,
  GridColumnMenuItemProps,
} from '@mui/x-data-grid';


const DataGridCustomColumnMenu = (props: GridColumnMenuProps) => {

  const itemProps = {
    colDef: props.colDef,
    onClick: props.hideMenu,
  };

  const CustomUserItem = (menuItemProps: GridColumnMenuItemProps) => {
    const { myCustomHandler, myCustomValue } = menuItemProps;
    return (
      <MenuItem //onClick={myCustomHandler}
      onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        myCustomHandler();
        itemProps.onClick(event);
      }}
      >
        <ListItemIcon>
          <SettingsApplicationsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{myCustomValue}</ListItemText>
      </MenuItem>
    );
  }

  return (
    <GridColumnMenu
        {...props}
      slots={{
        columnMenuColumnsItem: null,
        columnMenuSortItem: null,
        columnMenuUserItem: CustomUserItem,
      }}
      slotProps={{
        columnMenuUserItem: {
          displayOrder: 15,
          myCustomValue: 'Hide',
          myCustomHandler: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => props.hideMenu,
        },
      }}
    />
  )
};

export default DataGridCustomColumnMenu;