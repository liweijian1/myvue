// eslint-disable-next-line
/* eslint-disable */
import * as types from './mutation-types'

 // 设置播放列表
 export const setPlaylist = function ({commit}, {list}) {
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_ORDERLIST, list)
};
// 选择播放
export const selectPlay = function({commit}, {list, index}) {
  commit(types.SET_PLAYLIST, list);
  commit(types.SET_ORDERLIST, list);
  commit(types.SET_CURRENTINDEX, index);
  commit(types.SET_PLAYING, true);
}
