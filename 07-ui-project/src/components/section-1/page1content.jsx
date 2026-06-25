import React from 'react'
import LeftContent from './leftcontent'
import RightContent from './rightcontent'
const page1content = () => {
  return (
    <div className='px-10 py-10 flex item-center gap-10 h-[90vh] bg-amber-950' >
      <LeftContent />
      <RightContent />

    </div>
  )
}

export default page1content
