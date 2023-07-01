import { atom } from 'recoil';

const canvasBackgroundState = atom<boolean>({
  key: 'canvasBackgroundState',
  default: false,
});

export default canvasBackgroundState;
