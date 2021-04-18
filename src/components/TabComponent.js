import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor'
import TabDevices from './tabs_nav/TabDevices'
import TabPrice from './tabs_nav/TabPrice'
import '../css/TabsNav.css'
import TabContentOne from './tab_content/TabContentOne'
import TabContentTwo from './tab_content/TabContentTwo'
import TabContentThree from './tab_content/TabContentThree'



const TabComponent = () => {
    const [tabIndex, setTabIndex] = useState(0)

    return(
        <div>
            <Tabs className='tabs' selectedIndex={tabIndex} onSelect={(tabIndex) => setTabIndex(tabIndex)}>
                <TabList className='tab-nav-container'>
                    <Tab className={`${tabIndex === 0 ? 'tab-selected active': null}`}><TabDoor /><p><strong>No commitments<br/>Cancel online anytime</strong></p></Tab>
                    <Tab className={`${tabIndex === 1 ? 'tab-selected active' : null}`}><TabDevices /><p style={{ marginTop: '-5.3125rem'}}><strong>Watch anywhere</strong></p></Tab>
                    <Tab className={`${tabIndex === 2 ? 'tab-selected active' : null}`}><TabPrice /><p><strong>Pick your price</strong></p></Tab>
                </TabList>

                <TabPanel><TabContentOne /></TabPanel>
                <TabPanel><TabContentTwo /></TabPanel>
                <TabPanel><TabContentThree /></TabPanel>
            </Tabs>
        </div>
    )
}



export default TabComponent