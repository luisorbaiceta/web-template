import { useRef } from 'react';
import { useMainContext } from '~/contexts/main';
import throttle from 'lodash.throttle';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout';

export function useScrollPosition(
  effect: ({ prevPos, currPos }: { prevPos: any; currPos: any }) => any,
  deps?: any,
  wait?: number,
) {
  const position = useRef(0);
  const { scrollInstance } = useMainContext();

  useIsomorphicLayoutEffect(() => {
    if (scrollInstance) {
      const callBack = ({ scroll: { y } }: { scroll: { y: number } }) => {
        const currPos = y;
        effect({ prevPos: position.current, currPos });
        position.current = currPos;
      };
      const debouncedCb = throttle(callBack, wait || 0);
      scrollInstance.on('scroll', debouncedCb);
    }
  }, [scrollInstance, ...(deps || [])]);

  return null;
}
