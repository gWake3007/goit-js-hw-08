const iframe = document.querySelector('iframe');
const throttle = require('lodash.throttle');

import Player from '@vimeo/player';

const player = new Player(iframe);

if(localStorage.getItem('videoplayer-current-time') > 0) {

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
const onPlay = function(data) {

   localStorage.setItem('videoplayer-current-time',data.seconds);    
}

player.on('timeupdate',throttle(onPlay,1000));
