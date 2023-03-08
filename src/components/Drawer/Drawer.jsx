import * as React from 'react';
import { Drawer as MUIBaseDrawer } from '@mui/material';
import './Drawer.scss';

export default function Drawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: true,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MUIBaseDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            variant="persistent"
          >
            <h2>This is drawer</h2>
          </MUIBaseDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
