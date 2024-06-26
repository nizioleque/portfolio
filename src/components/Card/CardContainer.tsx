import { Box } from "@mui/material";
import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useCallback,
  useRef,
  useState,
} from "react";
import { Events } from "react-scroll";
import { useSetRecoilState } from "recoil";
import { useEffectOnce, useIsomorphicLayoutEffect } from "usehooks-ts";
import scrollEndState, {
  ScrollEndStateStatus,
} from "../../atoms/scrollEndState";
import CardContainerContext from "../../contexts/CardContainerContext";
import CardIterationCountContext from "../../contexts/CardIterationCountContext";
import useCardSize from "../../hooks/useCardSize";
import { responsiveSize } from "../../theme/responsiveSize";

interface CardContainerProps {
  children: ReactNode;
  onRender: () => void;
}

const Repetitions = 5;

function CardContainer(
  { children, onRender }: CardContainerProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const scrollContainer = useRef<HTMLElement | null>(null);
  const scrollContent = useRef<HTMLElement | null>(null);

  const isAutoScrolling = useRef<boolean>(false);
  const blockScrollChange = useRef<boolean>(false);
  const pauseAutoScroll = useRef<boolean>(false);

  const [rendered, setRendered] = useState<boolean>(false);

  const cardSize = useCardSize();

  // infinite scroll (user/auto)
  const handleScroll = useCallback(() => {
    if (
      !scrollContent.current ||
      !scrollContainer.current ||
      isAutoScrolling.current ||
      blockScrollChange.current
    )
      return;

    const contentHeight = scrollContent.current.offsetHeight / Repetitions;
    const scrollTop = scrollContainer.current.scrollTop;

    if (scrollTop > 3 * contentHeight) {
      scrollContainer.current.scrollTo({
        top: contentHeight + (scrollTop % contentHeight),
      });
    } else if (scrollTop < contentHeight) {
      scrollContainer.current.scrollTo({
        top: 2 * contentHeight + (scrollTop % contentHeight),
      });
    }
  }, []);

  // default scroll position
  useIsomorphicLayoutEffect(() => {
    if (!scrollContent.current || !scrollContainer.current) {
      return;
    }

    setRendered(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!scrollContent.current || !scrollContainer.current) {
      return;
    }

    if (rendered) {
      const contentHeight = scrollContent.current.offsetHeight / Repetitions;
      scrollContainer.current.scrollTo({ top: contentHeight + 1 });
    }
  }, [rendered]);

  useEffectOnce(() => {
    onRender();
  });

  // scroll animation // TODO enable
  // useInterval(() => {
  //   if (pauseAutoScroll.current === false) {
  //     animateScroll.scrollMore(340, {
  //       duration: 1500,
  //       smooth: 'easeInOutQuad',
  //       containerId: 'scroll-container',
  //     });
  //   }
  // }, 4000);

  const setScrollEndListener = useSetRecoilState(scrollEndState);

  Events.scrollEvent.register("begin", () => {
    isAutoScrolling.current = true;
  });

  Events.scrollEvent.register("end", () => {
    isAutoScrolling.current = false;

    setScrollEndListener((scrollEndListener) => {
      if (
        scrollEndListener === null ||
        scrollEndListener.status !== ScrollEndStateStatus.Scrolling
      )
        return scrollEndListener;

      blockScrollChange.current = true;
      return {
        id: scrollEndListener.id,
        status: ScrollEndStateStatus.Done,
      };
    });

    setTimeout(() => handleScroll(), 0);
  });

  return (
    <CardContainerContext.Provider
      value={{
        scrollContainer,
        blockScrollChange,
        pauseAutoScroll,
      }}
    >
      <Box
        id="scroll-container"
        ref={(node: HTMLDivElement) => {
          if (typeof ref === "function") ref(node);
          else if (ref !== null) ref.current = node;

          if (scrollContainer !== null) scrollContainer.current = node;
        }}
        sx={{
          overflowY: "auto",
          height: "100%",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        onScroll={handleScroll}
      >
        <Box
          ref={scrollContent}
          sx={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "auto auto",
            ...responsiveSize(6, undefined, "gap"),
            "& > :nth-of-type(even) .animation-child-positioned": {
              top: cardSize / 2,
            },
          }}
        >
          <CardIterationCountContext.Provider value={0}>
            {children}
          </CardIterationCountContext.Provider>
          {rendered &&
            Array.from({ length: Repetitions - 1 }).map((_, index) => (
              <CardIterationCountContext.Provider key={index} value={index + 1}>
                {children}
              </CardIterationCountContext.Provider>
            ))}
        </Box>
      </Box>
    </CardContainerContext.Provider>
  );
}

export default forwardRef(CardContainer);
