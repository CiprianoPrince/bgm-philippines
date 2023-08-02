import React from "react"
import BGMStack from "../../../../components/ui/BGMStack"
const TrainingExperienceSwiperSlide = ({ name, position, experience }) => {
  return (
    <>
      <BGMStack className='p-5'>
        <p className='bgm-fs-0 text-light mb-5'>{experience}</p>
        <p className='bgm-fs-0 text-light mb-0'>-{position}-</p>
        <p className='bgm-fs-0 text-light mb-0'>{name}</p>
      </BGMStack>
    </>
  )
}

export default TrainingExperienceSwiperSlide
