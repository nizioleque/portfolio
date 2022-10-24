import { Box } from '@mui/material';
import {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import {
  desktopLayoutQuery,
  desktopNavWidth,
  mobileLayoutQuery,
} from '../theme';
import IndexContext from '../contexts/IndexContext';
import {
  sectionColors,
  transitionTime,
  transitionTimingFunction,
} from '../theme';
import SectionContext from '../contexts/SectionContext';

interface SectionProps {
  children: ReactNode;
  id: string;
  fullscreen?: boolean;
}

interface ScrollData {
  direction: 'up' | 'down';
  lastChangePosition: number;
  previousPosition: number;
}

function Section({ children, id, fullscreen }: SectionProps) {
  const backgroundColor = sectionColors[id];
  const { ref, inView } = useInView({ threshold: 0.5 });
  const {
    currentSection,
    setCurrentSection,
    mobileNavHeight,
    mobileMenuHeight,
    hideMenu,
    setHideMenu,
    mobileLayout,
  } = useContext(IndexContext);

  useEffect(() => {
    if (inView) setCurrentSection(id);
  }, [inView, setCurrentSection, id]);

  const [scrollData, setScrollData] = useState<ScrollData>({
    direction: 'down',
    lastChangePosition: 0,
    previousPosition: 0,
  });
  const scrollContainerVerticalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollContainerVerticalRef.current?.scrollTo({
      top: -scrollContainerVerticalRef.current?.scrollHeight,
    });
  }, [mobileLayout]);

  const scrollCallback = useCallback(() => {
    if (currentSection !== id) return;

    const container = scrollContainerVerticalRef.current!;
    const currentScrollTop = container.scrollTop ?? 0;

    const currentDirection =
      currentScrollTop > scrollData.previousPosition ? 'down' : 'up';

    const scrolledToBottom =
      Math.abs(container.scrollTop) - (!hideMenu ? mobileMenuHeight : 0) < 5;

    if (scrolledToBottom) {
      setHideMenu(false);
    } else if (currentDirection === scrollData.direction) {
      if (Math.abs(currentScrollTop - scrollData.lastChangePosition) > 30) {
        const newHideMenu = currentDirection === 'down';
        newHideMenu !== hideMenu && setHideMenu(newHideMenu);
      }
    } else {
      setScrollData((previousValue) => ({
        ...previousValue,
        direction: currentDirection,
        lastChangePosition: currentScrollTop,
      }));
    }

    setScrollData((previousValue) => ({
      ...previousValue,
      previousPosition: currentScrollTop,
    }));
  }, [currentSection, hideMenu, id, mobileMenuHeight, scrollData, setHideMenu]);

  useEffect(() => {
    const container = scrollContainerVerticalRef.current;
    container?.addEventListener('scroll', scrollCallback);
    return () => container?.removeEventListener('scroll', scrollCallback);
  }, [scrollCallback, currentSection]);

  return (
    <SectionContext.Provider value={{ inView }}>
      <Box
        sx={{
          [mobileLayoutQuery]: {
            flexShrink: 0,
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            transform: `translateY(-${mobileMenuHeight}px)`,
            transition: `transform ${transitionTime}ms ${transitionTimingFunction}`,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box
          id={id}
          ref={(newRef: HTMLDivElement) => {
            ref(newRef);
            scrollContainerVerticalRef.current = newRef;
          }}
          sx={{
            overflowY: 'auto',
            backgroundColor,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            [desktopLayoutQuery]: {
              mr: !fullscreen ? desktopNavWidth + 'px' : undefined,
              pr: fullscreen ? desktopNavWidth + 'px' : undefined,
              my: '5vh',
              '&:first-of-type': { mt: 0 },
              '&:last-of-type': { mb: 0 },
              boxShadow: !fullscreen ? 14 : undefined,
              borderRadius: !fullscreen ? '0 5vh 5vh 0' : undefined,
              height: '100vh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            },
            [mobileLayoutQuery]: {
              width: '100vw',
              borderRadius: '0 0 5vw 5vw',
              flex: 1,

              display: 'flex',
              flexDirection: 'column-reverse',
              '& > *': { flexShrink: 0 },
            },
          }}
        >
          {children}
        </Box>

        <Box
          sx={{
            [mobileLayoutQuery]: {
              flexShrink: 0,
              flexBasis: hideMenu ? 0 : `${mobileNavHeight}px`,
              transition: `flex-basis ${transitionTime}ms ${transitionTimingFunction}`,
            },
          }}
        ></Box>
      </Box>
    </SectionContext.Provider>
  );
}

export default Section;
