import React from 'react'
import { Wrapper } from './style'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

export default function Footer() {
    const { pathname } = useLocation()
    return (
        <Wrapper>
            <Link to="/map" className={classnames({ active: pathname == '/map' })}>
                {pathname == '/map' ?
                    <i className='iconfont icon-daohang2'></i>
                    : <i className='iconfont icon-daohang1'></i>}
                <span>地图</span>
            </Link>
            <Link to="/find" className={classnames({ active: pathname == '/find' || pathname == '/' })}>
                {pathname == '/find' || pathname == '/' ?
                    <i className='iconfont icon-faxian2'></i>
                    : <i className='iconfont icon-faxian1'></i>}
                <span>发现</span>
            </Link>
            <Link to="/car" className={classnames({ active: pathname == '/car' })}>
                {pathname == '/car' ?
                    <i className='iconfont icon-qiche2'></i>
                    : <i className='iconfont icon-qiche1'></i>}
                <span>爱车</span>
            </Link>
            <Link to="/shop" className={classnames({ active: pathname == '/shop' })}>
                {pathname == '/shop' ?
                    <i className='iconfont icon-gouwudai2'></i>
                    : <i className='iconfont icon-gouwudai1'></i>}
                <span>商城</span>
            </Link>
            <Link to="/mine" className={classnames({ active: pathname == '/mine' })}>
                {pathname == '/mine' ?
                    <i className='iconfont icon-wode2'></i>
                    : <i className='iconfont icon-wode1'></i>}
                <span>我的</span>
            </Link>
        </Wrapper>
    )
}
