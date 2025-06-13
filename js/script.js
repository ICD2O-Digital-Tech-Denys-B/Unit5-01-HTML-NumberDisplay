// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function countNum() {
    const userMin = parseInt(document.getElementById("minNum").value)
    const userMax = parseInt(document.getElementById("maxNum").value)
    if (userMin >= userMax) {
        document.getElementById("output").innerHTML = "Please enter valid numbers"
    }
    else {   let counter = userMin
        let numbers = ""
        while (counter < userMax) {
            counter = counter + 1
            numbers = numbers + counter + "<br>"}
        document.getElementById("output").innerHTML = "" + numbers }
}