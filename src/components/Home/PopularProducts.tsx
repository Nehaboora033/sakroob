import React from 'react'
import Description from '../common/Description'
import SubHeading from '../common/SubHeading'
import sensors from '../../assets/png/sensors.png'
import Image from 'next/image'
import customParts from '../../assets/png/pcParts.png'
import tools from '../../assets/png/tools.png'
import cables from '../../assets/png/cables.png'
import gaming from '../../assets/png/gamming.png'
import raspberry from '../../assets/png/raspberry.png'

const PopularProducts: React.FC = () => {
  return (
    <div className='max-w-[1396px] px-3 mx-auto'>
      <Description className='text-center'>
        Featured Categories
      </Description>
      <SubHeading className='max-w-[602px] mx-auto mt-2 mb-[57px] text-center'>
        Shop Our Most Popular Products
      </SubHeading>
      <div className='grid grid-cols-1 gap-6'>
        <div className='grid grid-cols-2 gap-6  h-[335px]'>
          <div className='blue-bg pl-[62px] flex items-center overflow-hidden rounded-lg '>
            <SubHeading className='text-[32px]! max-w-[172px]'>
              Sensors & Modules
            </SubHeading>
            <Image src={sensors} alt="Sensors & Modules" className='' height={261} width={440} />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='cable-bg pt-8 text-center flex items-center flex-col justify-between rounded-lg'>
              <SubHeading className='text-[32px]! max-w-[213px]  mx-auto'>
                Custom PC Parts
              </SubHeading>
              <Image src={customParts} alt='custom parts' />
            </div>
            <div className='grey-bg pt-[46px] flex flex-col justify-between p-3 items-center rounded-lg'>
              <SubHeading className='text-[32px]! text-center'>
                DIY Tools
              </SubHeading>
              <Image src={tools} alt='tools' />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6 '>
          <div className='grid grid-cols-2 gap-6 h-[335px]'>
            <div className='cable-bg pt-[26px] flex  pr-4 overflow-hidden flex-col relative rounded-lg '>
              <SubHeading className='text-[32px]!  mx-auto pl-[120px] '>
                Cables & Connectors
              </SubHeading>
              <Image src={cables} alt='cables' className='absolute bottom-0' />
            </div>
            <div className='grey-bg pt-[22px] flex flex-col items-center p-5 justify-between rounded-lg'>
              <SubHeading className='text-[32px]! max-w-[241px] mx-auto text-center'>
                Gaming Peripherals
              </SubHeading>
              <Image src={gaming} alt='gaming' />
            </div>
          </div>
          <div className='blue-bg pt-[59px] overflow-hidden h-[335px] rounded-lg '>
            <SubHeading className='text-[32px]!  text-center'>
              Raspberry Pi Kits
            </SubHeading>
            <Image src={raspberry} alt='raspberry' className='mt-auto w-[680px]  h-[235px] ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProducts