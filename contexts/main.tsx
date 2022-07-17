import React, { FC, useEffect, useRef, useState } from 'react';
import { debounce } from '~/lib/debounce';
import { createContext } from '~/lib/create-context';

type WindowSize = {
  width?: number;
  height?: number;
};

type ScrollPosition = {
  x: number;
  y: number;
};

const [MainContextProvider, useMainContext] = createContext<{
  fontsLoaded: boolean;
  windowSize: WindowSize;
  scrollPosition: { current: ScrollPosition };
}>('MAIN_CONTEXT');

const MainProvider: FC<{
  children?: React.ReactNode;
}> = ({
  children,
}) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [scrollInstance, setScrollInstance] = useState<any>();
  const scrollPosition = useRef<ScrollPosition>({
    x: 0,
    y: 0,
  });
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    /**
     * Ensure that we only register animations depending on font size when the real font
     * has been loaded
     */
    document.fonts.ready.finally(() => {
      setFontsLoaded(true);
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Call the handler immediately so state gets updated with initial window size
    handleResize();

    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return (
    <MainContextProvider
      /**
       * Use the scrollInstance and fontsLoaded to update registered animations as they
       * might vary depending on the type
       */
      scrollPosition={scrollPosition}
      windowSize={windowSize}
      fontsLoaded={fontsLoaded}
    >
      {children}
    </MainContextProvider>
  );
};

export { MainProvider, useMainContext };
