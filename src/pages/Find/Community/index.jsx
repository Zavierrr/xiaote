import React from 'react'
import { Wrapper } from './style'
import { Ellipsis } from 'antd-mobile'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { PullToRefresh, List } from 'antd-mobile';
import Scroll from '@/components/common/Scroll'
import Lazyload, { forceCheck } from 'react-lazyload'
import { sleep } from 'antd-mobile/es/utils/sleep';
import 'react-photo-view/dist/react-photo-view.css';
import Loading_GIF from '@/assets/images/loading.gif'
import Lazyload_GIF from '@/assets/images/1.gif'
import { getGMT } from '@/api/utils';
// import IMG from './IMG';

export default function Community(props) {
    const { communityInfo } = props
    // console.log(communityInfo.length > 0 && communityInfo[1].images)
    return (
        <Wrapper>
            <PullToRefresh
                onRefresh={async () => {
                    await sleep(1000);
                    // setData([...getNextData(), ...data]);
                }}
                renderText={() => {
                    return <img className='loading_gif' src={Loading_GIF} alt="" />;
                }}>
                <List style={{ minHeight: '100vh' }}>
                    <Scroll
                        direction="vertical" // 垂直滚动
                        refresh={false} // 下拉更新为false
                        // pullUp={handlePullUp}
                        // pullDown={handlePullDown}
                        onScroll={
                            () => {
                                setTimeout(() => {
                                    forceCheck()
                                }, 1000)
                            }
                        }
                    >
                        {communityInfo.map((item, index) => {
                            return (
                                <div className='user_section' key={index}>
                                    <div>
                                        <div className='xiaote_user'>
                                            <div className='user_wrapper'>
                                                <div className='user_pic'>
                                                    <img src={item.user.avatarUrl} alt="user.img" />
                                                </div>
                                                <div className='user_info'>
                                                    <span className='user_info_name'>{item.user.nickname}</span>
                                                    <div className='user_info_detail'>
                                                        <span>{getGMT(item.updatedAt)}</span>
                                                        {/* 数据配置杂乱无章，只能自己区分 */}
                                                        {item.user.carType
                                                            ? <span>{item.user.carType}</span> : (item.user.tag.indexOf('未') != -1
                                                                ? <span>未认证</span> : <span>已订车</span>)}
                                                        <span>{item.user.region.province}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='user_follow'>
                                                <span>关注</span>
                                            </div>
                                        </div>
                                        <div className='user_article'>
                                            <Ellipsis
                                                direction='end'
                                                content={item.content}
                                                expandText='全文'
                                                collapseText='收起'
                                                rows={3}
                                            // onContentClick={}
                                            />
                                        </div>
                                    </div>

                                    {item.images.length > 0 &&
                                        <PhotoProvider>
                                            <div className='user_img_wrapper'>
                                                <Lazyload
                                                    height={100}
                                                    placeholder={<img width="100%" height="100%" src={Lazyload_GIF} />}
                                                >
                                                    {item.images.length > 0 && item.images.map((item, index) => {
                                                        return (
                                                            <PhotoView src={item.url} key={index}>
                                                                <div className='user_img' style={{ backgroundImage: `url(${item.url})` }}></div>
                                                                {/* <IMG imgUrl={item} key={index} /> */}
                                                                {/* <img src={item.url} alt="" /> */}
                                                            </PhotoView>
                                                        )
                                                    })}
                                                </Lazyload>
                                            </div>
                                        </PhotoProvider>
                                    }
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
                                </div>
                            )
                        })}
                    </Scroll>
                </List>
            </PullToRefresh>
        </Wrapper>
    )
}
