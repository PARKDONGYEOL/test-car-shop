import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageTitle from '../common/PageTitle';
import Input from '../common/Input';
import Select from '../common/Select';
import styles from './Car.module.css';


const Car = () => {
  const [makerList, setMakerList] = useState([]);

  useEffect(()=>{
  },[])

  return (
    <div className={styles.head_div}>
      <div>
        <PageTitle title='차량등록'  size='100px' color='darkblue'/>
      </div>
      <div className={styles.input_div}>
        <div>
          <span>제조사</span>
          <Select />
        </div>
        <div>
          <span>모델명</span>
          <Input type="text" />
        </div>
        <div>
          <span>차량가격</span>
          <Input type="text" />
        </div>
      </div>

    
    </div>
  )
}

export default Car