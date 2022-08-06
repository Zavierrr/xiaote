// 独立配置文件，路由配置
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Find from '@/pages/Find'
// 这样import浪费资源，影响首页速度，应该不点击就不会加载（推迟加载），切换到路由后加载
const Car = lazy(() => import('@/pages/Car'))
const Map = lazy(() => import('@/pages/Map'))
const Mine = lazy(() => import('@/pages/Mine'))
const Shop = lazy(() => import('@/pages/Shop'))

export default function RoutesConfig() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path='/' element={<Find />}></Route>
        <Route path='/find' element={<Find />}></Route>
        <Route path='/map' element={<Map />}></Route>
        <Route path='/car' element={<Car />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/mine' element={<Mine />}></Route>
      </Routes>
    </Suspense>
  )
}
