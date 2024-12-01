import React, { useState } from 'react'
import List from '../List/List';

const Filter = () => {
    const [click, setClick] = useState('');
    const [onfilter, setonFilter] = useState(false);
    const [tab, setTab] = useState('like')

    return (
        <div className='Filter_wrap container'>
            {onfilter ? (
                <>
                    <div className="filter_header">
                        <div className={tab === 'like' ? 'click' : ''} onClick={() => { setTab('like') }}>맞춤 가게</div>
                        <div className={tab === 'point' ? 'click' : ''} onClick={() => { setTab('point') }}>맛집과 비교하기</div>
                    </div>
                    <div className="main">
                        <List />
                    </div>
                </>
            ) : (
                <>
                    <div className="header">
                        <h2>어떤 가게를 찾고 있나요?</h2>
                    </div>
                    <div className="main">
                        <div className="filter">
                            <h2>시도</h2>
                            <div className="filters">
                                <p className={click === '서울특별시' ? 'click' : ''} onClick={() => { setClick('서울특별시') }}>서울특별시</p>
                                <p className={click === '경기도' ? 'click' : ''} onClick={() => { setClick('경기도') }}>경기도</p>
                                <p className={click === '전라도' ? 'click' : ''} onClick={() => { setClick('전라도') }}>전라도</p>
                                <p className={click === '경상북도' ? 'click' : ''} onClick={() => { setClick('경상북도') }}>경상북도</p>
                                <p className={click === '경상남도' ? 'click' : ''} onClick={() => { setClick('경상남도') }}>경상남도</p>
                                <p className={click === '제주도' ? 'click' : ''} onClick={() => { setClick('제주도') }}>제주도</p>
                            </div>
                        </div>
                        <div className="filter">
                            <h2>시군</h2>
                            <div className="filters">
                                <p>마포구</p>
                                <p>중구</p>
                                <p>성북구</p>
                                <p>중구</p>
                            </div>
                        </div>
                        <div className="filter">
                            <h2>업종</h2>
                            <div className="filters">
                                <p>요식업</p>
                                <p>미용</p>
                                <p>디저트</p>
                            </div>
                        </div>
                        <div className="filter">
                            <h2>가격</h2>
                            <div className="filters">
                                <p>1만원대</p>
                                <p>1만원 이하</p>
                                <p>2만원 이상</p>
                            </div>
                        </div>
                        <button onClick={() => { setonFilter(true) }}>결과 보러 가기</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Filter