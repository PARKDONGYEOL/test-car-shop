package com.green.car_shop.sale.controller;


import com.green.car_shop.sale.dto.SaleInfoDTO;
import com.green.car_shop.sale.service.SaleInfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/buy")
@RequiredArgsConstructor
public class SaleInfoController {
  private final SaleInfoService saleInfoService;

  @PostMapping("")
  public void buyCarAdd(@RequestBody SaleInfoDTO saleInfoDTO){
    saleInfoService.buyCarAdd(saleInfoDTO);
  }

  @GetMapping("")
  public List<SaleInfoDTO> getBuyList(){
    return saleInfoService.getBuyList();
  }

}
