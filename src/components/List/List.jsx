import React, { useEffect, useState } from 'react'
import Sample from '../../assets/img/sample.png'
import HartBin from '../../assets/img/hart_bin.svg'

const List = ({ page }) => {
    const [Page, setPage] = useState('');

    useEffect(() => {
        console.log(page)
        if (page !== '') {
            setPage(page)
        }
    }, [page])

    return (
        <div className="list_wrap">
            <div className="list">
                <img src={Sample} alt="" />
                <div className='content'>
                    <div className="top">
                        <div className="header">
                            <h4>가게 이름</h4>
                            <img className={Page !== 'point' ? '' : 'none'} src={HartBin} alt="" />
                        </div>
                        <p className="introduce">
                            가게 설명
                        </p>
                    </div>
                    <div className="tage">
                        <p>#메뉴1</p>
                        <p>#메뉴2</p>
                    </div>
                    <button className={Page === 'like' ? 'like' : 'none'}>다녀왔어요!</button>
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
    )
}

export default List