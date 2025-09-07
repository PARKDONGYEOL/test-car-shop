package com.green.car_shop.car_info.mapper;

import com.green.car_shop.car_info.dto.CarInfoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CarInfoMapper {

    public void postCarInfo(CarInfoDTO carInfoDTO);
    public List<CarInfoDTO> getCarInfoList();
    public List<String> getSelectModel();

}