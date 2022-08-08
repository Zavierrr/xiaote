import React, { memo, useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import style from '@/assets/global-style';
import { debounce } from '@/api/utils';
import { px2rem } from '@/assets/global-style'

const SearchBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 ${px2rem(20)};
    background: ${style["theme-color"]};
    height: ${px2rem(50)};
    .wrapper{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(247,247,247);
        border-radius: ${px2rem(20)};
        .shanchu{
            display: inline-block;
            width: ${px2rem(40)};
            text-align: center;
            font-size: ${px2rem(12)};
            i{
                font-size: ${px2rem(18)};
                color: #aeaeae;
                line-height: ${px2rem(34)};
            }
        }
        .sousuo{
            width: ${px2rem(30)};
            display: inline-block;
            text-align: end;
            i{
                font-size: ${px2rem(20)};
                color: #aeaeae;
                line-height: ${px2rem(34)};
            }
        }
        input{
            flex: 1;
            border: none;
            background-color: rgb(247,247,247);
            border-radius: ${px2rem(20)};
            height: ${px2rem(30)};
            padding-left: ${px2rem(6)};
            outline: none;
            border: none;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            letter-spacing: ${px2rem(0.5)};
            &::placeholder{
                color: #aeaeae;
                font-size: ${px2rem(14)};
                position: relative;
            }
        }
    }
    .cancel{
        display: inline-block;
        text-align: end;
        width: ${px2rem(50)};
        font-size: ${px2rem(15)};
        letter-spacing: ${px2rem(0.5)};
    }
`

const SearchBox = (props) => {
    const queryRef = useRef();
    const { newQuery } = props;
    const { handleQuery, back } = props;
    // 防抖，只有按下回车才改变newProps
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        let val = e.currentTarget.value
        setQuery(val)
    }

    // mount（挂载）
    useEffect(() => {
        // 挂载后 聚焦
        queryRef.current.focus();
    }, [])

    // useMemo 可以缓存 上一次函数计算的结果
    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 500)
    }, [handleQuery])

    useEffect(() => {
        handleQueryDebounce(query)
    }, [query])

    useEffect(() => {
        // mount 时候执行父组件 newQuery -> input query
        let curQuery = query
        if (newQuery !== query) {
            curQuery = newQuery
            queryRef.current.value = newQuery
        }
        setQuery(curQuery)
    }, [newQuery])

    const clearQuery = () => {
        setQuery('')
        queryRef.current.value = ''
        queryRef.current.focus();
    }

    const displayStyle = query ? { display: 'block' } : { display: 'none' }

    return (
        <SearchBoxWrapper>
            <div className="wrapper">
                <span className="sousuo">
                    <i className="iconfont icon-sousuo"></i>
                </span>
                <input
                    type="text"
                    className="box"
                    placeholder="充电桩"
                    ref={queryRef}
                    onChange={handleChange} />
                <span className="shanchu">
                    <i className="iconfont icon-shanchu" style={displayStyle} onClick={clearQuery}></i>
                </span>
            </div>
            <span className="cancel" onClick={() => back()}>取消</span>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox)