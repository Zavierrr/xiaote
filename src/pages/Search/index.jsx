import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBox from '@/components/common/search-box'
import { Toast } from 'antd-mobile';
import Lazyload, { forceCheck } from 'react-lazyload'
import {
  Container,
  ShortcutWrapper,
  HotKey
} from './style'
import { CSSTransition } from 'react-transition-group'
import Scroll from '@/components/common/Scroll'
import { getHotword, getSearchList, getQuery } from '@/store/actions/search';

function Search(props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false);
  const { hotword, queryList, searchList } = props
  const {
    getHotwordDispatch,
    getSearchListDispatch,
    getQueryDispatch
  } = props

  const searchBack = () => {
    setShow(false);
  }

  useEffect(() => {
    setShow(true)
    getHotwordDispatch()
    getSearchListDispatch()
    // console.log(searchList, '1112323');
  }, [])

  const handleQuery = (q) => {
    setQuery(q)
  }

  useEffect(() => {
    if (query.trim()) {
      // 有必要去请求
      // changeEnterLoadingDispatch(true);
      getSearchListDispatch()
      getQueryDispatch(query)
      console.log(queryList, '2323');
    }
  }, [query])

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

  const renderQueryList = () => {
    let list = queryList ? queryList : [];
    return (
      list.map((item, index) => {
        return (
          <li className="item" key={index}>
            <span>{item.content}</span>
            <span>{item.user.nickname}</span>
          </li>
        )
      })
    )
  }

  // const renderSingers = () => {
  //   let singers = suggestList.artists;
  //   if (!singers || !singers.length) return;
  //   console.log(singers)
  //   return (
  //     <List>
  //       <h1 className="title">相关歌手</h1>
  //       {
  //         singers.map((item, index) => {
  //           return (
  //             <ListItem key={item.accountId + "" + index} onClick={() => gotoSingers(item.id)}>
  //               <div className="img_wrapper">
  //                 <Lazyload placeholder={
  //                   <img src={singerImg} alt="music" width="100%" height="100%" />
  //                 }>
  //                   <img src={item.picUrl} alt="music" width="100%" height="100%" />
  //                 </Lazyload>
  //               </div>
  //               <span className='name'>歌手：{item.name}</span>
  //             </ListItem>
  //           )
  //         })
  //       }
  //     </List>
  //   )
  // }

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
          handleQuery={handleQuery}>
        </SearchBox>
        <ShortcutWrapper show={!query}>
          <Scroll>
            <HotKey>
              <h1 className="title">—— 热门搜索 ——</h1>
              {renderHotKey()}
            </HotKey>
          </Scroll>
        </ShortcutWrapper>
        <ShortcutWrapper show={query}>

          <div>
            {renderQueryList()}
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))