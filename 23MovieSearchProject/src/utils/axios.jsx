import React from 'react'
import axios from 'axios'
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2JkMTI0ZTg3MWZ2W1jhkMGQ2ZGvmOCIsInN1YmplY3QiOiIyNjI1Y1I6I1I6I1I6QmYxYzQmYxNWFjZ2W1MTg2MDA5MTFkOTZJNCI6InNjbiJ3JhGc1fcmVhZCJ9LCJleHAiOjE3MjI2MjI2MDAsImlhdCI6MTcyMjU1OTYwMCJ9.uPJuX67gktlPrFCrY6ZuR7Xm5bZESAcyqvSu8swmOLI"
    }
})
export default instance