package com.green.car_shop.car_info.controller;

import com.green.car_shop.car_info.dto.CarInfoDTO;
import com.green.car_shop.car_info.service.CarInfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/car")
@RequiredArgsConstructor
public class CarInfoController {
    private final CarInfoService carInfoService;

    @PostMapping("")
    public void postCarInfo(@RequestBody CarInfoDTO carInfoDTO){
//        System.out.println(carInfoDTO.toString());
        carInfoService.postCarInfo(carInfoDTO);
    }

    @GetMapping("/list")
    public List<CarInfoDTO> getCarInfoList() {
        return carInfoService.getCarInfoList();
    }

    @GetMapping("")
    public List<String> getSelectModel() {
        return carInfoService.getSelectModel();
    }

}
