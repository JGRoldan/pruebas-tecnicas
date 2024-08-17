package com.example.java.Response;

import lombok.Data;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;


@Data
public class ApiResponse<T> {
    private String timestamp;
    private Integer status;
    private String result;
    private T data;
    public ApiResponse(Integer status, String result, T data) {
        this.timestamp = ZonedDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSXXX"));
        this.status = status;
        this.result = result;
        this.data = data;
    }
}
