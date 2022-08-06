import React from 'react'
import { Wrapper } from './style'

export default function Header() {
    return (
        <Wrapper>
            <div className='header_title'>
                <span>XIAOTE</span>
            </div>
            <div className='header_search'>
                <input type="text" placeholder='大家都在搜「充电桩」' />
                <span>
                    <i className='iconfont icon-sousuo'></i>
                </span>
            </div>
            <div className='header_info'>
                <span>
                    <i className='iconfont icon-lingdang'></i>
                </span>
            </div>
        </Wrapper>
    )
}
