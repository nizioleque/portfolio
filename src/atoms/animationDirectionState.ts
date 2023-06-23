import { atom } from 'recoil';

export enum AnimationDirection {
  Up,
  Down,
}

const animationDirectionState = atom<AnimationDirection>({
  key: 'animationDirectionState',
  default: AnimationDirection.Down,
});

export default animationDirectionState;
