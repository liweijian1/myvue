// eslint-disable-next-line
/* eslint-disable */
import {URL} from '../assets/js/config.js'
import axios from 'axios'

// 排行榜列表
export function getToplistDetail() {
  const url =  `${URL}/toplist/detail`;
  return axios.get(url)
}

// 热销榜
export function getHottoplist(){
  const url = `${URL}/personalized`;
  return axios.get(url)
}
