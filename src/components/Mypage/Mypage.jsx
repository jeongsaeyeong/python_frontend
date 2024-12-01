import React from 'react'
import { Link } from 'react-router-dom'
import MypageFull from '../../assets/img/mypage_full.svg'

const Mypage = () => {
    return (
        <div className='Mypage_wrap container'>
            <div className="header">
                <img src={MypageFull} alt="" />
                <h1>만원의 행복님!</h1>
                <p>오늘도 즐거운 식사하세요!</p>
            </div>
            <div className="main">
                <Link to='/'>내 정보 확인하기</Link>
                <button>로그아웃</button>
            </div>
        </div>
    )
}

export default Mypage