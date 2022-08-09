import styled from "styled-components";
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
    font-size: ${px2rem(16)};
    padding: 0 ${px2rem(16)};
    .loading_gif{
        height: ${px2rem(188)};
    }
    .pullUpLoading {
        position: absolute;
        bottom: 8.25rem;
        left: 50%;
        transform: translate(-50%);
        img {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`