import React from 'react'
import { Wrapper } from './style'
import { getGMT } from '@/api/utils';
import { Ellipsis } from 'antd-mobile'
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function UserSection(props) {
  const { item } = props
  return (
    <Wrapper>
      {/* <div className='user_section' key={index}> */}
      <div>
        <div className='xiaote_user'>
          <div className='user_wrapper'>
            <div className='user_pic'>
              <img src={item.user.avatarUrl} alt="user.img" />
            </div>
            <div className='user_info'>
              <span className='user_info_name'>{item.user.nickname}</span>
              <div className='user_info_detail'>
                {/* 计算时间 */}
                <span>{getGMT(item.updatedAt)}</span>
                {/* 数据配置杂乱无章，简单区分了下 */}
                {
                  item.user.carType
                    ? <span>{item.user.carType}</span> : (item.user.tag.indexOf('未') != -1
                      ? <span>未认证</span> : <span>已订车</span>)
                }
                <span>{item.user.region.province}</span>
              </div>
            </div>
          </div>
          <div className='user_follow'>
            <span>关注</span>
          </div>
        </div>
        <div className='user_article'>
          {/* 多行折叠 */}
          <Ellipsis
            direction='end'
            content={item.content}
            expandText='全文'
            collapseText='收起'
            rows={3}
          />
        </div>
      </div>
      {/* 图片 + 预览 */}
      {item.images.length > 0 &&
        <PhotoProvider>
          <div className='user_img_wrapper'>
            {item.images.map((item, index) => {
              return (
                <PhotoView src={item.url} key={index}>
                  <div className='user_img'
                    style={{
                      backgroundImage: `url(${item.url})`
                    }}>
                  </div>
                  {/* <IMG imgUrl={item} key={index} /> */}
                  {/* <img src={item.url} alt="" /> */}
                </PhotoView>
              )
            })}
          </div>
        </PhotoProvider>
      }
      {/* 点赞、评论、分享 */}
      <div className='user_interact'>
        <div className='user_interaction'>
          <div>
            <i className='iconfont icon-dianzan'></i>
            <span>{item.likeCount}</span>
          </div>
          <div>
            <i className='iconfont icon-pinglun'></i>
            <span>{item.commentCount}</span>
          </div>
        </div>
        <div className='user_share'>
          <i className='iconfont icon-fenxiang'></i>
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  )
}
