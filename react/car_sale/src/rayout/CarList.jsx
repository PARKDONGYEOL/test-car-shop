import React from 'react';
import styles from './CarList.module.css';

const CarList = ({ carInfoList }) => {
  return (
    <table className={styles.main_table}>
      <colgroup>
        <col width='10%'/>
        <col width='10%'/>
        <col width='40%'/>
        <col width='*%'/>
      </colgroup>
      <thead>
        <tr>
          <th>No</th>
          <th>모델번호</th>
          <th>모델명</th>
          <th>제조사</th>
        </tr>
      </thead>
      <tbody>
        {
          carInfoList.length > 0 ? (
          carInfoList.map((data, index) => (
            <tr key={index}>
              <td>{carInfoList.length - index}</td>
              <td>{data.modelNum}</td>
              <td>{data.modelName}</td>
              <td>{data.makerName}</td>
            </tr>
          )) 
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>
                등록된 차량모델이 없습니다.
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default CarList
