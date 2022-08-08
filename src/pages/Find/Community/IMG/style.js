import styled from "styled-components";
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
    width: ${px2rem(108)};
    height: ${px2rem(108)};
    margin-right: ${px2rem(6)};
    background-image: url(${props => props});
    background-size: cover;
    float: left;
    &:last-child{
        border-top-right-radius: ${px2rem(12)};
        border-bottom-right-radius: ${px2rem(12)};
        margin-right: 0;
    }
    &:nth-child(3){
        border-top-right-radius: ${px2rem(12)};
        border-bottom-right-radius: ${px2rem(12)};
    }
`