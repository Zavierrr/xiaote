import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBox from '@/components/common/search-box'
import { Toast } from 'antd-mobile';
import {
  Container,
  ShortcutWrapper,
  HotKey
} from './style'
import { CSSTransition } from 'react-transition-group'
import Scroll from '@/components/common/Scroll'
import { getHotword, getSearchList, getQuery, getHistoryKey, getDeleteAll } from '@/store/actions/search'
import UserSection from '@/components/common/userSection';

function Search(props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false);
  const { hotword, queryList, historyKey } = props
  const {
    getHotwordDispatch,
    getSearchListDispatch,
    getQueryDispatch,
    getHistoryKeyDispatch,
    getDeleteAllDispatch
  } = props

  const searchBack = () => {
    setShow(false);
  }

  useEffect(() => {
    setShow(true)
    getHistoryKeyDispatch()
    getHotwordDispatch()
    getSearchListDispatch()
  }, [])

  const handleQuery = (q) => {
    setQuery(q)
  }

  const deleteAll = () => {
    getDeleteAllDispatch()
    Toast.show({
      content: '已清空搜索历史',
      icon: 'success',
      duration: 800
    })
  }

  useEffect(() => {
    if (query.trim()) {
      // 获取全部数据
      getSearchListDispatch()
      // 搜索数据
      getQueryDispatch(query)
      getHistoryKeyDispatch(query)
    }
  }, [query])

  // 热词
  const renderHotKey = () => {
    let list = hotword ? hotword : [];
    return (
      <ul>
        {
          list.map((item, index) => {
            return (
              <li className="item" key={index} onClick={() => { setQuery(item.q) }}>
                <span>{item.q}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }

  // 搜索历史
  const renderHistoryKey = () => {
    let list = historyKey ? historyKey : [];
    return (
      <ul>
        {
          list.map((item, index) => {
            return (
              <li className="item" key={index} onClick={() => setQuery(item.data)}>
                <span>{item.data}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }

  // 搜索列表
  const renderQueryList = () => {
    let list = queryList ? queryList : [];
    return (
      list.map((item, index) => {
        return (
          <UserSection item={item} key={index} />
        )
      })
    )
  }

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExit={() => {
        navigate(-1)
      }}
    >
      <Container>
        <SearchBox
          back={searchBack}
          newQuery={query}
          handleQuery={handleQuery}
        >
        </SearchBox>
        <ShortcutWrapper show={!query}>
          <Scroll>
            <HotKey>
              <h1 className="title">
                <span> 搜索历史 </span>
                <span onClick={deleteAll}>
                  <i className='iconfont icon-shanchu'></i>
                </span>
              </h1>
              {renderHistoryKey()}
            </HotKey>
            <HotKey>
              <h1 className="title"> <span> 热门搜索 </span> </h1>
              {renderHotKey()}
            </HotKey>
          </Scroll>
        </ShortcutWrapper>
        <ShortcutWrapper show={query}>
          <div>
            <h1 className="article">—— 相关文章 ——</h1>
            {renderQueryList()}
            <span className="end"> 没有更多啦~ </span>
          </div>
        </ShortcutWrapper>
        {/* {enterLoading && <EnterLoading><Loading></Loading></EnterLoading>} */}
      </Container>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => ({
  hotword: state.search.hotword,
  queryList: state.search.queryList,
  searchList: state.search.searchList,
  historyKey: state.search.historyKey
})
const mapDispatchToProps = (dispatch) => ({
  getHotwordDispatch() {
    dispatch(getHotword())
  },
  getSearchListDispatch() {
    dispatch(getSearchList())
  },
  getQueryDispatch(query) {
    dispatch(getQuery(query))
  },
  getHistoryKeyDispatch(data) {
    dispatch(getHistoryKey(data))
  },
  getDeleteAllDispatch(data) {
    dispatch(getDeleteAll(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))