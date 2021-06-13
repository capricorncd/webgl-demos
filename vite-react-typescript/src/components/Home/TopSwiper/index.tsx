/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-06-13 09:15 (GMT+0900)
 */
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import {DefaultProps} from "@/types";
import {getClasses} from "@/helpers";
import AppImage from "@/components/Common/AppImage";
import welcomeCover from "~/temp/welcome.jpg";
import AppPrice from "@/components/Common/AppPrice";
import DetailPopup from "@/components/DetailPopup";
import './index.scss'

SwiperCore.use([Pagination, Autoplay])

interface TopSwiperProps extends DefaultProps {
}

export default function TopSwiper(props: TopSwiperProps) {
  const [detailVisible, setDetailVisible] = useState(false)
  const classes = getClasses('home-top-swiper', props.className)

  return (
    <div className={classes}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        loop
        navigation
        pagination={{ clickable: true }}
      >
        {Array.from({length: 10}).map((item, i) => (
          <SwiperSlide key={i}>
            <div className="item shadow" onClick={() => setDetailVisible(true)}>
              <AppImage
                src={welcomeCover}
                height={200}/>
              <h4 className="ell mt5">オジンオボックンオジンオボックン</h4>
              <div className="flex-space-between">
                <AppPrice>{ i + 1 + '00' }</AppPrice>
                <span className="gray fs12">说明文字内容说明文字内容说明文字内容</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <DetailPopup visible={detailVisible} onClose={() => setDetailVisible(false)}/>
    </div>
  )
}
