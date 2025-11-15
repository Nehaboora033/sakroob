import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Input from './common/Input'
import Button from './common/Button'

const FooterCard: React.FC = () => {
  return (
    <div className='flex translate-y-[142px]'>
      <Container className='' >
        <div className='h-[388px]  rounded-3xl bg-[#7CA8DD] bg-cover bg-center bg-no-repeat px-3 flex items-center justify-center relative  ' style={{ backgroundImage: "url('/images/footer-card-img.jpg')" }}>
          <div
            className="absolute inset-0 rounded-3xl bg-cover bg-center opacity-85"
            style={{ backgroundImage: "url('/images/sky-blue-sheet.png')" }}></div>
          <div className='relative z-10'>
            <SubHeading className='text-white! text-center mb-4'>
              Join the Sakroob Circle
            </SubHeading>
            <Description className='text-center text-white! mb-[46px] '>
              Exclusive drops, early access, and maker tips in your inbox.
            </Description>
            <div className='flex flex-col gap-4'>
              <Input name='emial' placeholder='Enter your email....' type='emial' className='min-[450px]:h-[68px] '>
                <Button className='bg-dark-blue text-white max-[450px]:hidden block'>
                  Join Now
                </Button>
              </Input>
              <Button className='bg-dark-blue text-white max-[450px]:block hidden h-[54px]'>
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterCard