import * as React from 'react';
import { Drawer as MUIBaseDrawer, Tab, Tabs, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './Drawer.scss';
import TabPanel from '../Tab/TabPanel';
import ActivityTable from '../Table/ActivityTable';
import ContactTable from '../Table/ContactTable';
import { useSelector } from 'react-redux';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Drawer({ open, handleClose }) {

  const [tabIndex, setTabIndex] = React.useState(0);

  const { device_id, name, lat, lng } =  useSelector((state) => state.marker.selectedMarker)

  const handleTabChange = (event, index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <React.Fragment key="bottom">
        <MUIBaseDrawer
          anchor="bottom"
          open={open}
          variant="persistent"
        >
          <div className="app__drawer-content">
            <div className="header app__flex">
              <h2 className="head-title primary-text">{`${device_id}  ${name}`}</h2>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="sub-header">
              <p>Location :</p>
              <p className="sub-header-value"><b>{`${lat}°N ${lng}°W`}</b></p>
            </div>
            <Tabs className="tab-menu" value={tabIndex} onChange={handleTabChange} centered>
              <Tab label="History" {...a11yProps(0)} />
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
    </div>
  );
}
