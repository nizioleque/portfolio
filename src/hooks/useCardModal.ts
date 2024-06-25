import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import shouldOpenModalState from "../atoms/shouldOpenModalState";
import CardContainerContext from "../contexts/CardContainerContext";
import CardIterationCountContext from "../contexts/CardIterationCountContext";

export default function useCardModal(id: string, targetUrl: string) {
  const { pauseAutoScroll } = useContext(CardContainerContext);
  const iterationId = useContext(CardIterationCountContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const uniqueId = useMemo(() => `${id}-${iterationId}`, [id, iterationId]);

  const [shouldOpenModal, setShouldOpenModal] = useRecoilState(
    shouldOpenModalState(uniqueId)
  );

  useEffect(() => {
    if (shouldOpenModal) {
      pauseAutoScroll.current = true;
      setIsModalOpen(true);
      setShouldOpenModal(false);
    }
  }, [shouldOpenModal, setShouldOpenModal, pauseAutoScroll]);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isModalOpen && url !== targetUrl) {
        setIsModalOpen(false);
      } else if (
        // !isModalOpen &&
        url === targetUrl
      ) {
        // TODO handle forward navigation
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [isModalOpen, router.events, targetUrl]);

  const closeModal = () => {
    setIsModalOpen(false);
    router.back();
  };

  return {
    isModalOpen,
    closeModal,
    uniqueId,
    setShouldOpenModal,
    setIsModalOpen,
  };
}
