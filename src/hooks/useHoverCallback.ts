import { useState, useCallback, useRef } from 'react';

// Adapted from https://gist.github.com/mbelsky/72c1117a63489daf8e6067049d4532d0

const useHoverCallback = <T extends HTMLElement>(): [
  (node?: T | null) => void,
  boolean
] => {
  const [value, setValue] = useState(false);
  const handleMouseEnter = useCallback(() => setValue(true), []);
  const handleMouseLeave = useCallback(() => setValue(false), []);
  const ref = useRef<T>();

  const callbackRef = useCallback<(node?: null | T) => void>(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', handleMouseEnter);
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      ref.current = node || undefined;
      if (ref.current) {
        ref.current.addEventListener('mouseenter', handleMouseEnter);
        ref.current.addEventListener('mouseleave', handleMouseLeave);
      }
    },
    [handleMouseEnter, handleMouseLeave]
  );

  return [callbackRef, value];
};

export default useHoverCallback;
