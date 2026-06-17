import React from 'react'
import axios from 'axios'
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiIiIyMjM2NjdkMTIzOTg3MWZjNGI2ZWVlZjhkMGQ2ZGVmOCIsInN1YiI6IjYxZmQyNWFjZWV1MTg2MDA5MTFKOTZjNCIsInNjb3B1cyI6WyJHcG1fcmVHZCJdLCJ2ZXJzaW9uIjoxfQ.uPjuX6gkt1prFCrY6ZuR7Xm5bZESAcyqvSu8swmOLI"
    }
})
export default instance