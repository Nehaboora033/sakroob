import React from 'react'
import Container from '../common/Container'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Image from 'next/image';
import { StarYellow } from '@/Utils/icons';
import SubHeading from '../common/SubHeading';
import Description from '../common/Description';
import profileimg from '../../assets/png/review profile.png'

interface TabsProps {
  tab: string;
}

export const Tabsname: TabsProps[] = [

  {
    tab: "Review"
  },
  {
    tab: "Specifications"
  },
  {
    tab: "FAQ’s"
  },


]

const Review = () => {
  return (
    <div className='sm:pt-[60px] '>
      <Container className=''>
        <Tabs>
          <div className="relative">
            {/* Base bottom line */}
            <div className="absolute bottom-0 left-0 w-full shadow-tabs border-b-8 border-cable-bg rounded-lg"></div>

            {/* Scrollable Tabs on small screens */}
            <div className="overflow-x-auto whitespace-nowrap no-scrollbar sm:overflow-visible">
              <TabList className="flex sm:grid sm:grid-cols-3 relative z-10 mb-[34px]">
                {Tabsname.map((item, index) => (
                  <Tab
                    key={index}
                    className="cursor-pointer font-medium sm:text-[24px] text-[20px] text-dark-blue leading-[100%] sm:py-[19px] py-3 px-5 sm:px-9 text-center transition-all duration-300 outline-none focus:outline-none"
                    selectedClassName="text-dark-blue relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full  after:h-[8px] after:bg-dark-blue after:rounded-lg"
                  >
                    {item.tab}
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>

          <TabPanel>
            <div className='shadow-reviewbox sm:p-6 p-3'>
              <div className='flex items-center gap-4 mb-4'>
                <Image src={profileimg} alt='profile' className='sm:size-[66px] size-[50px] rounded-full' />
                <div >
                  <div className='flex items-center gap-2 mb-2 justify-between'>
                    <div className='flex'>
                      <StarYellow />
                      <StarYellow />
                      <StarYellow />
                      <StarYellow />
                      <StarYellow />
                    </div>
                    <p className='font-medium text-[14px] text-dark-blue'>
                      25/10/25
                    </p>
                  </div>
                  <div>
                    <SubHeading className='sm:text-[20px]! text-[20px]!'>
                      Kathryn Murphy
                    </SubHeading>
                  </div>
                </div>
              </div>
              <Description>
                Excellent router that offers great value for its price. The setup process is straightforward and user-friendly, making it easy even for non-technical users. With two powerful 5 dBi antennas, the router delivers a strong and stable network connection throughout the home or office, ensuring no lag or disconnections during browsing, streaming, or gaming. Its compact design fits well in any space, making it both efficient and unobtrusive. Highly recommended for reliable everyday internet use.
              </Description>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='shadow-reviewbox p-6' >
              <SubHeading className='text-[24px]! mb-4'>
                Specifications
              </SubHeading>
              <ul className=''>
                <li className='mb-2'>
                  ADSL2+ Router with 300 Mbps speed
                </li>
                <li className='mb-2'>
                  4 Ethernet Ports + 1 WAN
                </li>
                <li className='mb-2'>
                  Dual 5dBi External Antennas
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <p className='p-6 shadow-reviewbox'>coming soon...</p>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  )
}

export default Review