package com.green.car_shop.sale.dto;

import com.green.car_shop.car_info.dto.CarInfoDTO;
import lombok.Data;

@Data
public class SaleInfoDTO {
  private int buyNum;
  private String buyName;
  private String colorName;
  private String contactNum;
  private String buyDate;
  private int modelNum;
//  private String modelName;
  private CarInfoDTO carInfoDTO;
}
