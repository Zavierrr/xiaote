import styled from "styled-components";
import style from '@/assets/global-style';
import { px2rem } from '@/assets/global-style'

export const Container = styled.div`
  font-size: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  background: #f2f3f4;
  transform-origin: right bottom;
  background: linear-gradient(to bottom, #D2D6E1 0%, #F3F4F6 20%, #F3F4F6 30%,#fff 100%);
  display: flex;
  justify-content: center;
  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
  /* CSSTransition 过度类型给children */
  &.fly-enter, &.fly-appear{
    opacity: 0;
    /* 启用GPU加速 性能优化 */
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    opacity: 1;
    transition: all .3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    opacity: 0;
    transition: all .3s;
    transform: translate3d(100%, 0, 0);
  }
`

export const ShortcutWrapper = styled.div`
  position: absolute;
  top: ${px2rem(50)};
  bottom: 0;
  width: 90%;
  display: ${props => props.show ? "" : "none"};
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
  .end{
    display: block;
    text-align: center;
    color: grey;
    padding: ${px2rem(20)} ${px2rem(20)} ${px2rem(40)};;
    font-size: ${px2rem(13)};
    letter-spacing: ${px2rem(0.5)};
  }
  .article{
    padding-top: ${px2rem(35)};
    padding-bottom: ${px2rem(15)};
    text-align: center;
    font-size: ${style["font-size-m"]};
    color: grey;
    border-bottom: ${px2rem(1)} solid #DBDEE7;
  }
`
export const HotKey = styled.div`
  margin: 0 ${px2rem(10)} ${px2rem(20)} ${px2rem(10)};
  .title{
    padding-top: ${px2rem(35)};
    margin-bottom: ${px2rem(14)};
    text-align: center;
    font-size: ${style["font-size-m"]};
    color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      &:first-child{
        padding-left: ${px2rem(6)};
      }
    }
  }
  .item{
    display: inline-block;
    padding: ${px2rem(5)} ${px2rem(10)};
    margin: 0 ${px2rem(14)} ${px2rem(10)} 0;
    border-radius: ${px2rem(6)};
    outline: 1px solid #cdcdcd;
    font-size: ${px2rem(13)};
    color: #515151;
  }
`