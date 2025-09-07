package com.green.car_shop.sale.mapper;

import com.green.car_shop.sale.dto.SaleInfoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SaleInfoMapper {

  public void buyCarAdd(SaleInfoDTO saleInfoDTO);
  public List<SaleInfoDTO> getBuyList();
}
