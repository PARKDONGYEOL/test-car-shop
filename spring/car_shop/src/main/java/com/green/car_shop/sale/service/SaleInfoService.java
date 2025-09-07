package com.green.car_shop.sale.service;

import com.green.car_shop.sale.dto.SaleInfoDTO;
import com.green.car_shop.sale.mapper.SaleInfoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SaleInfoService {
  private final SaleInfoMapper saleInfoMapper;

  public void buyCarAdd(SaleInfoDTO saleInfoDTO){
    saleInfoMapper.buyCarAdd(saleInfoDTO);
  }

  public List<SaleInfoDTO> getBuyList(){
    return saleInfoMapper.getBuyList();
  }


}
