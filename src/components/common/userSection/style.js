import styled from "styled-components";
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
    border-bottom: ${px2rem(1)} solid #E7E8EC;
    .xiaote_user{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${px2rem(16)} 0;
        .user_wrapper{
            width: 100%;
            height: ${px2rem(44)};
            display: flex;
            align-items: center;
            .user_info{
                height: ${px2rem(36)};
                display: flex;
                flex-direction:column;
                justify-content:space-between;
                .user_info_name{
                    font-weight: bold;
                    letter-spacing: ${px2rem(0.6)};
                    font-size: ${px2rem(15)};
                }
                .user_info_detail{
                    color: #bdbdbd;
                    font-size: ${px2rem(12)};
                    span:not(:last-child)::after{
                        content: ' · ';
                    }
                }
            }
            .user_pic{
                img{
                    width: ${px2rem(40)};
                    height: ${px2rem(40)};
                    border-radius: 50%;
                }
                padding-right: ${px2rem(10)};
            } 
        }
        .user_follow{
            width: ${px2rem(40)};
            background-color: #f7f7f7;
            padding: ${px2rem(6)} ${px2rem(12)};
            border-radius: ${px2rem(20)};
            text-align: center;
            span{
                line-height: ${px2rem(15)};
                font-size: ${px2rem(13)};
                display: inline-block;
                text-align: center;
                color: #707070;
            }
        }
    }
    .user_article{
        padding-left: ${px2rem(4)};
        padding-bottom: ${px2rem(14)};
        font-size: ${px2rem(16)};
        letter-spacing: ${px2rem(0.5)};
    }
    .user_img_wrapper{
        height: ${px2rem(108)};
        border-radius: ${px2rem(12)};
        overflow: hidden;
        width: 100%;
        margin: 0 0 ${px2rem(16)};
        /* justify-content: space-between; */
        /* flex-wrap: nowrap; */
        /* align-items: center; */
        /* display: flex; */

        .user_img{
            width: ${px2rem(108)};
            height: ${px2rem(108)};
            margin-right: ${px2rem(6)};
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
        }
    }
    .user_interact{
        padding: 0 0 ${px2rem(16)};
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${px2rem(13)};
        color: #707070;
        i{
            font-size: ${px2rem(18)};
        }
        .user_interaction{
            width: 36%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div{
                display: flex;
                width: 28%;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

`