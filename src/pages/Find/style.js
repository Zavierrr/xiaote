import styled from "styled-components";
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
    margin-top: ${px2rem(44)};
    padding: ${px2rem(32)} 0 ${px2rem(60)};
    .find_Tabs{
        color: #bfbfbf;
        letter-spacing: 1px;
        position: fixed;
        width: 100vw;
        top: ${px2rem(44)};
        background-color: #fff;
        z-index: 999;
        left: 0px;
    }
    .content {
        height: 120px;
        color: #999999;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        user-select: none;
    }
    .backTop{
        opacity: ${props => props.show ? 1 : 0};
        position: fixed;
        font-size: 12px;
        bottom: ${px2rem(80)};
        right: ${px2rem(20)};
        border-radius: 50%;
        z-index: 99;
        background-color: rgb(255,221,107);
        padding: 10px;
        transition: all linear 0.2s
    }
`