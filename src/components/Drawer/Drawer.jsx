import * as React from 'react';
import { Drawer as MUIBaseDrawer, Tab, Tabs } from '@mui/material';
import { AiOutlineClose} from "react-icons/ai"

import './Drawer.scss';
import TabPanel from '../Tab/TabPanel';
import ActivityTable from '../Table/ActivityTable';
import ContactTable from '../Table/ContactTable';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, index) => {
    setTabIndex(index);
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
            <div className="app__drawer-content">
              <div className="header app__flex">
                <h2 className="head-title primary-text">M 5.8 - 106 km ESE of Severo-Kuril’sk, Russia</h2>
                <AiOutlineClose/>
              </div>
              <div className="sub-header">
                <p>Location</p>
                <p className="sub-header-value"><b>19.654°N 65.357°W</b></p>
              </div>
              <Tabs className="tab-menu" value={tabIndex} onChange={handleTabChange} centered>
                <Tab label="Aktivitas" {...a11yProps(0)} />
                <Tab label="Kontak Darurat" {...a11yProps(1)}/>
              </Tabs>
              <TabPanel value={tabIndex} index={0}>
               <ActivityTable/>
              </TabPanel>
              <TabPanel value={tabIndex} index={1}>
                <ContactTable/>
              </TabPanel>
            </div>
          </MUIBaseDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
