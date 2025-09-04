package com.green.car_shop.car_info.service;

import com.green.car_shop.car_info.dto.CarInfoDTO;
import com.green.car_shop.car_info.mapper.CarInfoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarInfoService {
    private final CarInfoMapper carInfoMapper;

    public void postCarInfo(CarInfoDTO carInfoDTO){
        carInfoMapper.postCarInfo(carInfoDTO);
    }

}
