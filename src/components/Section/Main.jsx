import React from 'react'
import Sample from '../../assets/img/sample.png'
import HartBin from '../../assets/img/hart_bin.svg'

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <h2>오늘의 추천 가게</h2>
            <div className="list_wrap">
                <div className="list">
                    <img src={Sample} alt="" />
                    <div className='content'>
                        <div className="top">
                            <div className="header">
                                <h4>가게 이름</h4>
                                <img src={HartBin} alt="" />
                            </div>
                            <p className="introduce">
                                가게 설명
                            </p>
                        </div>
                        <div className="tage">
                            <p>#메뉴1</p>
                            <p>#메뉴2</p>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <img src={Sample} alt="" />
                    <div className='content'>
                        <div className="top">
                            <div className="header">
                                <h4>가게 이름</h4>
                                <img src={HartBin} alt="" />
                            </div>
                            <p className="introduce">
                                가게 설명
                            </p>
                        </div>
                        <div className="tage">
                            <p>#메뉴1</p>
                            <p>#메뉴2</p>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <img src={Sample} alt="" />
                    <div className='content'>
                        <div className="top">
                            <div className="header">
                                <h4>가게 이름</h4>
                                <img src={HartBin} alt="" />
                            </div>
                            <p className="introduce">
                                가게 설명
                            </p>
                        </div>
                        <div className="tage">
                            <p>#메뉴1</p>
                            <p>#메뉴2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main