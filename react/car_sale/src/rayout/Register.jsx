import React, { useEffect, useState } from 'react';
import styles from './Register.module.css';
import PageTitle from '../common/PageTitle';
import Input from '../common/Input';
import Select from '../common/Select';
import Modal from '../common/Modal';   
import axios from 'axios';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const nav = useNavigate();
  const [btnDisable, setBtnDisable] = useState(false);
  const [modelActive, setModelActive] = useState(false);
  const [colorActive, setColorActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [nameActive, setNameActive] = useState(false);
  const [saleInfo, setSaleInfo] = useState({
    buyName    : '',
    colorName  : '선택',
    contactNum : '',
    carInfoDTO : { modelName: ''}
  });

  const [selectList, setSelectList] = useState(['선택']);

  const handlSaleData = (e) => {
    const { name, value } = e.target;
    if (name === "modelName") {
      setSaleInfo({
        ...saleInfo,
        carInfoDTO: {...saleInfo.carInfoDTO, modelName: value}
      });
    } else {
      setSaleInfo({
        ...saleInfo,
        [name]: value
      });
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleBlur = (e) => {

    if (e.target.name === 'contactNum' && e.target.value !== '') {
      const regex = /^\d{3}-\d{3,4}-\d{4}$/;
      if (!regex.test(e.target.value)) {
        showError('연락처 형식이 올바르지 않습니다. EX) 010-1234-5678');
        setSaleInfo(old => ({ ...old, contactNum: '' }));
        setContactActive(false);
      }}
  };

  const isValid = () => {
    return (
      saleInfo.buyName.trim() !== '' &&
      saleInfo.colorName !== '' && saleInfo.colorName !== '선택' &&
      saleInfo.carInfoDTO.modelName !== '' && saleInfo.carInfoDTO.modelName !== '선택'
    );
  };


  useEffect(() => {

    axios.get('/api/car')
    .then(res => {
      setBtnDisable(!isValid());
      setSelectList(res.data);
    })
    .catch(e=>console.log(e))    


  }, [saleInfo]);

  const showError = (msg) => {
    setModalMessage(msg);
    setModalOpen(true);
  };

const registerSale = () => {
  if (!saleInfo.buyName || saleInfo.buyName.trim() === '') {
    showError('구매자명을 입력해주세요!');
    return;
  }      

  if (!saleInfo.colorName || saleInfo.colorName === '선택') {
    showError('색상을 선택해주세요!');
    return;
  }

  if (!saleInfo.carInfoDTO.modelName || saleInfo.carInfoDTO.modelName === '선택') {
    showError('모델을 선택해주세요!');
    return;
  }

  axios.post('/api/buy', saleInfo)
    .then(() => {
      nav('/sales');
    })
    .catch(e => console.log(e));
};

  return (
    <div style={{width :'100%'}}>
      <div className={styles.main_div}>
        <div>
          <PageTitle title='판매정보등록' 
                    size='100%'
                    color='darkgray' 
                    fontStyle='normal'
          />
        </div>
        <div className={styles.item_div}>
          <div>구매자명</div>
          <Input
            type="text"
            size='50%'
            name='buyName'
            value={saleInfo.buyName}
            bgColor={nameActive ? '#e8f0fe' : 'white'}
            onChange={(e) => {
              handlSaleData(e);
              setNameActive(e.target.value !== null && e.target.value !== '');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') registerSale();
            }}                 
          />
        </div>      
        <div className={styles.item_div}>
          <div>색상</div>
          <Select size='50%'
            name='colorName'
            bgColor={colorActive ? '#e8f0fe' : 'white'}
            value={saleInfo.colorName}
            onChange={(e) => {
              handlSaleData(e);
              setColorActive(e.target.value !== '선택' && e.target.value !== '');
            }}
          >
            <option value='선택'>선택</option>
            <option value='화이트'>화이트</option>
            <option value='블랙'>블랙</option>
            <option value='레드'>레드</option>
          </Select>
        </div>   
        <div className={styles.item_div}>
          <div>모델</div>
          <Select size='50%'
            name='modelName'
            bgColor={modelActive ? '#e8f0fe' : 'white'}
            value={saleInfo.modelName}
            onChange={(e) => {
              handlSaleData(e);
              setModelActive(e.target.value !== '선택' && e.target.value !== '');
            }}
          >
            <option value='선택'>선택</option>
            {
              selectList.map((data, index) => (
                <option key={index} value={data}>{data}</option>
              ))
            }
          </Select>
        </div>
        <div className={styles.item_div}>
          <div>연락처</div>
          <Input
            type="text"
            size='50%'
            name='contactNum'
            value={saleInfo.contactNum}
            bgColor={contactActive ? '#e8f0fe' : 'white'}
            onChange={(e) => {
              handlSaleData(e);
              setContactActive(e.target.value !== null && e.target.value !== '');
            }}
            onBlur={handleBlur}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleBlur(e);
            }}                 
          />
        </div> 
        <div className={styles.btn_div}>
          <Button title="등록" onClick={registerSale} disabled={btnDisable} />
        </div>          
      </div>
      <Modal
        size="500px"
        title="알림"
        style={{ margin: 0 }}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <p>{modalMessage}</p>
      </Modal>          
    </div>    
  )
}

export default Register