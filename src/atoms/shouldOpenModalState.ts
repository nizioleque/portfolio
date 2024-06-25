import { selectorFamily } from "recoil";
import scrollEndState, { ScrollEndStateStatus } from "./scrollEndState";

const shouldOpenModalState = selectorFamily({
  key: "shouldOpenModalState",

  get:
    (id: string) =>
    ({ get }) => {
      const currentState = get(scrollEndState);
      return (
        currentState !== null &&
        currentState.id === id &&
        currentState.status === ScrollEndStateStatus.Done
      );
    },
  set:
    (id: string) =>
    ({ set }, newValue) => {
      if (newValue) {
        set(scrollEndState, { id, status: ScrollEndStateStatus.Scrolling });
      } else {
        set(scrollEndState, null);
      }
    },
});

export default shouldOpenModalState;
