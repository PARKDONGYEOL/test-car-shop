import React, { useEffect, useState } from 'react'
import styles from './Sales.module.css'
import PageTitle from '../common/PageTitle'
import axios from 'axios';
const Sales = () => {
  const [buyCarList, setBuyCarList] = useState([]);

  useEffect(()=>{
    axios.get('/api/buy')
    .then(res=>setBuyCarList(res.data))
    .catch(e=>console.log(e));
  },[])
  
  return (
    <div className={styles.main_div}>
      <div>
        <PageTitle 
          title='판매목록조회' 
          size='100%' 
          color='lightblue' 
          fontStyle='normal'
          fontSize='1.0rem' 
        />
      </div>
      <div className={styles.table_div}>
        <table>
          <colgroup>
            <col width='5%'/>
            <col width='10%'/>
            <col width='*'/>
            <col width='20%'/>
            <col width='10%'/>
            <col width='15%'/>
            <col width='20%'/>
          </colgroup>
          <thead>
            <tr>
              <th rowSpan={2} className={styles.right_line}>No</th>
              <th colSpan={4} className={styles.right_line}>구매자정보</th>
              <th colSpan={2}>차량정보</th>
            </tr>
            <tr>
              <th>구매자명</th>
              <th>연락처</th>
              <th>구매일</th>
              <th className={styles.right_line}>색상</th>
              <th>모델명</th>
              <th>가격</th>
            </tr>
          </thead>
            <tbody>
              {buyCarList.length > 0 ? (
                buyCarList.map((data, index) => (
                  <tr key={index}>
                    <td>{buyCarList.length - index}</td>
                    <td>{data.buyName}</td>
                    <td>{data.contactNum === '' ? '-' : data.contactNum }</td>
                    <td>{data.buyDate}</td>
                    <td>{data.colorName}</td>
                    <td>{data.carInfoDTO?.modelName}</td>
                    <td>{data.carInfoDTO?.carPrice?.toLocaleString()} 원</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center' }}>
                    등록된 판매내역이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>

        </table>      
      </div>

    </div>
  )
}

export default Sales