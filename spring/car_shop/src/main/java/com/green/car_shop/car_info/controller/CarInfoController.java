package com.green.car_shop.car_info.controller;

import com.green.car_shop.car_info.dto.CarInfoDTO;
import com.green.car_shop.car_info.service.CarInfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/car")
@RequiredArgsConstructor
public class CarInfoController {
    private final CarInfoService carInfoService;

    @PostMapping("")
    public void postCarInfo(CarInfoDTO carInfoDTO){
        carInfoService.postCarInfo(carInfoDTO);
    }

}
