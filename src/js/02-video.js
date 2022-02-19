import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedSavedTime = JSON.parse(savedTime);

const onPlay = data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(parsedSavedTime).catch(function (error) {
  switch (error.name) {
    case 'TypeError':
      // the id was not a number
      break;

    default:
      // some other error occurred
      break;
  }
});
