import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import { Ellipsis } from 'antd-mobile'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { PullToRefresh, List, Toast, InfiniteScroll } from 'antd-mobile';
import { getCommunityInfoRequest } from '@/api/request';
import { sleep } from 'antd-mobile/es/utils/sleep';
import 'react-photo-view/dist/react-photo-view.css';
import Loading_GIF from '@/assets/images/loading.gif'
import { getGMT } from '@/api/utils';
// import IMG from './IMG';

export default function Community(props) {
    const { communityInfo } = props
    const { getCommunityInfoDispatch, addCommunityInfoDispatch } = props
    const [hasMore, setHasMore] = useState(true)
    let [page, setPage] = useState(1)

    const backtop = () => {
        window.scrollTo(0, 0)
    }


    useEffect(() => {
        if (!communityInfo.length) {
            getCommunityInfoDispatch(page)
        }
    }, [])

    // 问题代码
    async function loadMore() {
        setPage(++page);// 划到最底部时触发，page+1 返回的数据+10
        const temp = await getCommunityInfoRequest(page) // 数据缓存，获取长度
        addCommunityInfoDispatch(temp) // 修改数据
        // 判断下次数据长度是否 >0
        let i = page + 1;
        if (getCommunityInfoRequest(i).length > 0) {
            setHasMore(true)
        } else if (i == 11) {
            setHasMore(false)
        }
    }

    return (
        <Wrapper>
            <PullToRefresh
                onRefresh={async () => {
                    await sleep(800);
                    getCommunityInfoDispatch(page)
                    Toast.show({
                        content: '已刷新'
                    })
                }}
                renderText={() => {
                    return <img className='loading_gif' src={Loading_GIF} alt="" />;
                }}>
                <List style={{ minHeight: '100vh' }}>
                    {communityInfo.length > 0 && communityInfo.map((item, index) => {
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
                            </div>
                        )
                    })}
                </List>
            </PullToRefresh>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={50} />
        </Wrapper>
    )
}
