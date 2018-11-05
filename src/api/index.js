// eslint-disable-next-line
/* eslint-disable */
import {URL,defaultLimit} from '../assets/js/config.js'
import axios from 'axios'

// 获取正在播放的列表
export function topList(idx){
  const url = `${URL}/top/list`;
  return axios.get(url,{
    params: {
      idx
    }
  });
}

// 排行榜列表
export function getToplistDetail() {
  const url =  `${URL}/toplist/detail`;
  return axios.get(url)
}

// 热销榜
export function getHottoplist() {
  const url = `${URL}/personalized`;
  return axios.get(url)
}
  //热搜
  export function searchHot() {
    const url = `${URL}/search/hot`;
    return axios.get(url)
}

// 查询
  export function search(keywords,limit = defaultLimit,page = 0){
  const url=`${URL}/search`;
  return axios.get(url,{
    params:{
      offset:page*limit,
      limit:limit,
      keywords
    }
  }
 )
  }

  //  获取歌曲地址
 export function getMusicUrl(id){
   const url = `${URL}/music/url`;
   return axios.get(url, {
     params: {
       id
     }
   })
 }
