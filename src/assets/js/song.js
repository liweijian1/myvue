// eslint-disable-next-line
/* eslint-disable */
function filterSinger(singers){
    let arr=[];
    singers.forEach(item => {
      arr.push(item.name)
    });
    return arr.join('/');
}

export  class Song{
  constructor({id,name,singer,album}){
    this.id = id;
    this.name = name;
    this.singer = singer;
    this.album = album
  }
}

export function createPlayList(music) {
  return new Song({
    id:music.id,
    name:music.name,
    singer:music.artists.length > 0 && filterSinger(music.artists),
    album:music.album.name
  })
}


//歌取数据格式化
const formatSongs = function formatPlayList(list){
  let Songs=[];
  list.forEach((item) => {
    const musicData = item;
    if(musicData.id){
      Songs.push(createPlayList(musicData))

    }  });
  return Songs;
}

export default formatSongs
