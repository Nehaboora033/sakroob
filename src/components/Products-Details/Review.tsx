import React from 'react'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'

const Review = () => {
  return (
    <div className="border-t pt-10">
      <SubHeading className="text-2xl mb-6">Customer Reviews</SubHeading>
      <Description>⭐⭐⭐⭐☆ 4.8/5 (based on 120 reviews)</Description>

      <div className="mt-4 flex flex-col gap-6">
        <p>
          “Excellent performance and build quality! Worth every penny.” — John
          D.
        </p>
        <p>
          “Looks great and works even better. Highly recommend!” — Sarah W.
        </p>
      </div>
    </div>
  )
}

export default Review