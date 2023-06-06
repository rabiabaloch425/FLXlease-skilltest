import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import OverviewPage from './overview';
import RoomsPage from './rooms';
import AmenitiesPaghe from './amenities';
import PoliciesPage from './policies';

const HotelDetailTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Rooms</Tab>
          <Tab>Amenities</Tab>
          <Tab>Policies</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <OverviewPage />
          </TabPanel>
          <TabPanel>
            <RoomsPage />
          </TabPanel>
          <TabPanel>
            <AmenitiesPaghe />
          </TabPanel>
          <TabPanel>
            <PoliciesPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default HotelDetailTabs;
