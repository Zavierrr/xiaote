import React, { useEffect, useRef, useState } from 'react';
import { Tabs, Swiper } from 'antd-mobile';
import { Wrapper } from './style';
import Community from './Community';
import { Link, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCommunityInfo, addCommunityInfo } from '@/store/actions/community-info'
const tabItems = [
  { key: '0', title: '社区' },
  { key: '1', title: '小特交付' },
  { key: '2', title: '超级车间' },
  { key: '3', title: '闲置' },
];
function Find(props) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);

  const { communityInfo } = props
  const { getCommunityInfoDispatch, addCommunityInfoDispatch } = props

  window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (scrollTop > 200) {
      setShow(true)
    } else setShow(false)
  })

  const backTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Wrapper show={show}>
      <div className='backTop' onClick={backTop}><i className='iconfont icon-bianji'></i></div>
      <Tabs
        className='find_Tabs'
        activeKey={tabItems[activeIndex].key}
        onChange={key => {
          var _a;
          const index = tabItems.findIndex(item => item.key === key);
          setActiveIndex(index);
          (_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.swipeTo(index);
        }}
        style={{
          '--active-line-color': '#EA1D33',
          '--active-title-color': 'black',
          '--title-font-size': '14px',
        }}
      >
        {tabItems.map(item => (<Tabs.Tab title={item.title} key={item.key} />))}
        <input />
      </Tabs>

      <Swiper
        direction='horizontal'
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={index => {
          setActiveIndex(index);
        }}
      >
        <Swiper.Item>
          <Community
            communityInfo={communityInfo}
            getCommunityInfoDispatch={getCommunityInfoDispatch}
            addCommunityInfoDispatch={addCommunityInfoDispatch} />
        </Swiper.Item>
        <Swiper.Item>
          <div className='content'>小特交付</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className='content'>超级车间</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className='content'>闲置</div>
        </Swiper.Item>
      </Swiper>
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  communityInfo: state.find.communityInfo
})
const mapDispatchToProps = (dispatch) => ({
  getCommunityInfoDispatch(page) {
    dispatch(getCommunityInfo(page))
  },
  addCommunityInfoDispatch(data) {
    dispatch(addCommunityInfo(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Find)