import React, { useEffect, useState } from 'react'
import Sample from '../../assets/img/sample.png'
import HartBin from '../../assets/img/hart_bin.svg'
import axios from 'axios';

const List = ({ page }) => {
    const [Page, setPage] = useState('');
    const [message, setMessage] = useState([]);

    useEffect(() => {
        console.log(page)
        if (page !== '') {
            setPage(page)
        }
    }, [page])

    useEffect(() => {
        // 필터링 조건을 정의
        const filters = {
            sido: "서울특별시",
            sigungu: "종로구",
            business_type: "기타비요식업",
            menu: "허리우드클래식",
        };

        console.log("요청 필터:", filters); // 디버깅용

        // Axios 요청
        axios
            .get('http://127.0.0.1:8000/api/stores', { params: filters })
            .then(response => {
                console.log("응답 데이터:", response.data); // 응답 확인
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error); // 에러 확인
            });
    }, []);

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