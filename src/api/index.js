// eslint-disable-next-line
/* eslint-disable */
import {URL} from '../assets/js/config.js'
import axios from 'axios'

// 排行榜列表
export function getToplistDetail() {
  const url = '/top/list';
  return axios.get(url)
}
