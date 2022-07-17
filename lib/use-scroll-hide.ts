import { useState, useRef, useEffect } from 'react';
import { useScrollPosition } from '~/lib/use-scroll-position';

export const useScrollHide = (obj?: { delta?: number; throttle?: number }) => {
  const delta = obj?.delta || 30;
  const throttle = obj?.throttle || 300;

  const [sticky, setSticky] = useState<boolean>(true);

  const showRef = useRef(true);
  const directionRef = useRef<'up' | 'down'>();
  const prevPosRef = useRef<number>();

  useEffect(() => {
    showRef.current = sticky;
  }, [sticky]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const direction = prevPos > currPos ? 'up' : 'down';
      if (direction !== directionRef.current) {
        directionRef.current = direction;
        return (prevPosRef.current = currPos);
      }
      if (Math.abs(prevPosRef.current! - currPos) >= delta || currPos <= delta) {
        if (showRef.current !== prevPos > currPos) {
          setSticky(prevPos >= currPos);
        }
      }
    },
    null,
    throttle,
  );

  return sticky;
};
