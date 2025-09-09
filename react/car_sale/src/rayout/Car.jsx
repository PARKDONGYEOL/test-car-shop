import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageTitle from '../common/PageTitle';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import Modal from '../common/Modal';   
import styles from './Car.module.css';
import CarList from './CarList';

const Car = () => {
  const [btnDisable, setBtnDisable] = useState(false);
  const [makerActive, setMakerActive] = useState(false);
  const [modelActive, setModelActive] = useState(false);
  const [priceActive, setPriceActive] = useState(false);
  const [carInfo, setCarInfo] = useState({
    modelName: '',
    makerName: '선택',
    carPrice: ''
  });
  
  const [carInfoList, setCarInfoList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const getCarList = () => {
    axios.get('/api/car/list')
      .then(res => setCarInfoList(res.data))
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getCarList(); 
  }, []);

  useEffect(() => {
    if (
      carInfo.makerName !== '선택' &&
      carInfo.makerName !== '' &&
      carInfo.modelName !== '' &&
      carInfo.carPrice !== ''
    ) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [carInfo]);

  const showError = (msg) => {
    setModalMessage(msg);
    setModalOpen(true);
  };

  const registerCar = () => {

  if (!carInfo.makerName || carInfo.makerName === '선택') {
    showError('제조사를 선택해주세요!');
    return;
  }
  if (!carInfo.modelName || carInfo.modelName.trim() === '') {
    showError('모델명을 입력해주세요!');
    return;
  }
  if (!carInfo.carPrice || isNaN(Number(carInfo.carPrice))) {
    showError('차량가격을 올바르게 입력해주세요!');
    return;
  }    
    axios.post('/api/car', {
      modelName: carInfo.modelName,
      makerName: carInfo.makerName,
      carPrice: Number(carInfo.carPrice)
    })
      .then(res => {
        showError('등록되었습니다!');
        getCarList();
        setCarInfo({ modelName: '', makerName: '', carPrice: '' });
      })
      .catch(e => console.log(e));
  };

  const handleCarData = (e) => {
    const { name, value } = e.target;
    setCarInfo({
      ...carInfo,
      [name]: name === 'carPrice'
        ? value.replace(/[^0-9]/g, '')
        : value
    });
  };

  return (
    <div className={styles.head_div}>
      <div>
        <PageTitle title='차량 등록' size='100px' color='darkblue' />
      </div>
      <div className={styles.input_div}>
        <div style={{ width: '65%' }}>
          <p>제조사</p>
          <Select size='70%'
            name='makerName'
            bgColor={makerActive ? '#e8f0fe' : 'white'}
            value={carInfo.makerName}
            onChange={(e) => {
              handleCarData(e);
              setMakerActive(e.target.value !== '선택' && e.target.value !== '');
            }}
          >
            <option value='선택'>선택</option>
            <option value='현대'>현대</option>
            <option value='기아'>기아</option>
          </Select>
        </div>
        <div>
          <p>모델명</p>
          <Input
            type="text"
            size='80%'
            name='modelName'
            bgColor={modelActive ? '#e8f0fe' : 'white'}
            value={carInfo.modelName}
            onChange={(e) => {
              handleCarData(e);
              setModelActive(e.target.value !== null && e.target.value !== '');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') registerCar();
            }}            
          />
        </div>
        <div>
          <p>차량가격</p>
          <Input
            type="text"
            size='75%'
            name='carPrice'
            bgColor={priceActive ? '#e8f0fe' : 'white'}
            value={carInfo.carPrice ? Number(carInfo.carPrice).toLocaleString() : ''}
            onChange={(e) => {
              handleCarData(e);
              setPriceActive(e.target.value !== null && e.target.value !== '');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') registerCar();
            }}
          />
        </div>
        <div style={{ width: '10%', fontSize: '1.2rem' }}>
          <Button title="등록" onClick={registerCar} disabled={btnDisable} />
        </div>
      </div>
      {
        <div>
            <PageTitle 
              title='등록된차량목록' 
              size='100%' 
              color='lightblue' 
              fontStyle='normal'
              fontSize='1.0rem' 
            />
            <CarList carInfoList={carInfoList} />
          </div>
      }
      <Modal
        size="400px"
        title="알림"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
};

export default Car;
