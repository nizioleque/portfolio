import { useRouter } from 'next/router';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import shouldOpenModalState from '../atoms/shouldOpenModalState';
import CardContainerContext from '../contexts/CardContainerContext';
import CardIterationCountContext from '../contexts/CardIterationCountContext';

export default function useCardModal(id: string) {
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
  const closeModal = () => {
    setIsModalOpen(false);
    router.push('/');
  };

  return {
    isModalOpen,
    closeModal,
    uniqueId,
    setShouldOpenModal,
    setIsModalOpen,
  };
}
