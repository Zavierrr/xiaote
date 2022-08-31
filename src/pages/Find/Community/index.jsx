import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import { PullToRefresh, List, Toast, InfiniteScroll } from 'antd-mobile';
import { getCommunityInfoRequest } from '@/api/request';
import { sleep } from 'antd-mobile/es/utils/sleep';
import 'react-photo-view/dist/react-photo-view.css';
import Loading_GIF from '@/assets/images/loading.gif'
import UserSection from '@/components/common/userSection';
// import IMG from './IMG';

export default function Community(props) {
    const { communityInfo } = props
    const { getCommunityInfoDispatch, addCommunityInfoDispatch } = props
    const [hasMore, setHasMore] = useState(true)
    let [page, setPage] = useState(1)

    useEffect(() => {
        if (!communityInfo.length) {
            getCommunityInfoDispatch(page)
            Toast.show({
                icon: 'loading',
                duration: 800
            })
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
        } else if (i == 9) {
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
                }}
            >
                <List style={{ minHeight: '100vh' }}>
                    {communityInfo.length > 0 && communityInfo.map((item, index) => {
                        return (
                            <UserSection item={item} key={index} />
                        )
                    })}
                </List>
            </PullToRefresh>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={50} />
        </Wrapper>
    )
}

