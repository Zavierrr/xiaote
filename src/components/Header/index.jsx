import React from 'react'
import { Wrapper } from './style'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'antd-mobile';

export default function Header() {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <div className='header_title'>
                <span>XIAOTE</span>
            </div>
            <div
                className='header_search'
                onClick={() => navigate("/search")}
            >
                <input type="text" placeholder='大家都在搜「充电桩」' />
                <span>
                    <i className='iconfont icon-sousuo'></i>
                </span>
            </div>
            <div
                className='header_info'
                onClick={() => {
                    Toast.show({
                        content: '功能未开发，敬请期待！'
                    })
                }}
            >
                <span>
                    <i className='iconfont icon-lingdang'></i>
                </span>
            </div>
        </Wrapper>
    )
}
