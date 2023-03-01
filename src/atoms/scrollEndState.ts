import { atom } from 'recoil';

export enum ScrollEndStateStatus {
  Scrolling,
  Done,
}

interface ScrollEndState {
  id: string;
  status: ScrollEndStateStatus;
}

const scrollEndState = atom<ScrollEndState | null>({
  key: 'scrollEndState',
  default: null,
});

export default scrollEndState;
