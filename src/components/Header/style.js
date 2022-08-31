import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
    width:100%;
    /* background-color: red; */
    height:${px2rem(44)};
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 9;
    .header_title{
        width:${px2rem(80)};
        font-weight: 900;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        padding-left: ${px2rem(14)};
    }
    .header_search{
        flex: 1;
        position: relative;
        background-color: rgb(247,247,247);
        border-radius: ${px2rem(20)};
        input{
            border: none;
            background-color: rgb(247,247,247);
            border-radius: ${px2rem(20)};
            height: ${px2rem(30)};
            padding-left: ${px2rem(36)};
            width: 80%;
            outline: none;
            &::placeholder{
                color: #aeaeae;
                font-size: ${px2rem(14)};
                position: relative;
                top: ${px2rem(2)};
                letter-spacing: ${px2rem(1)};
            }
        }
        span{
            display: inline-block;
            position: absolute;
            left: ${px2rem(14)};
            i{
                font-size: ${px2rem(20)};
                color: #aeaeae;
                line-height: ${px2rem(34)};
            }
        }
    }
    .header_info{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            i{
                font-size: ${px2rem(24)};
            }
        }
    }
`