import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
    width:100%;
    height:${px2rem(60)};
    position:fixed;
    bottom:0;
    left:0;
    display:flex;
    // Link生成的a标签
    a{
        color: #bdbdbd;
        flex:1;
        background-color: #fff;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        font-size: ${px2rem(10)};
        padding-top: ${px2rem(10)};
        line-height: ${px2rem(24)};
        &.active{
            color:#333333;
        }
        i{
            font-size:${px2rem(24)};
        }
    }
`