import React, { useState } from 'react'
import List from '../List/List'

const Scrap = () => {
    const [tab, setTab] = useState('like')

    return (
        <div className='Scrap_wrap container'>
            <div className="header">
                <div className={tab === 'like' ? 'click' : ''} onClick={() => { setTab('like') }}>좋아요 한 가게</div>
                <div className={tab === 'point' ? 'click' : ''} onClick={() => { setTab('point') }}>포인트</div>
            </div>
            {tab === 'like' ? (
                <>
                    <div className="main">
                        <List page={tab} />
                    </div>
                </>
            ) : (
                <>
                    <div className="main">
                        <div className="point">
                            <h2>지금 나의 포인트</h2>
                            <p>10000</p>
                        </div>
                        <div className="visit">
                            <h2>내가 다녀온 가게</h2>
                            <List page={tab} />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Scrap