import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../Logo';

function SideBar() {
  const Categories = [
    { label: 'Categories', value: 'categories' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
  const Genres = [
    { label: 'Genres', value: 'Genres' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Action', value: 'Action' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Animation', value: 'Animation' },
  ];
  return (
    <div>
      <Toolbar>
        <Logo />
      </Toolbar>
      <Divider />
      <List>
        {Categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Genres.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default SideBar;
