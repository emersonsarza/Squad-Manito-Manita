import React, { useEffect, useMemo, useState } from 'react';

import Question from '../../components/Question';
import { Container, DisplayContainer } from './QuestionsPage.styles';
import useUser from '../../context/useUser';
import {
  getParticipantById,
  getWishList,
  isValidParticipant,
} from '../../utils/db';
import Manito from '../../components/Manito';

const QuestionsPage = () => {
  const [stepsCompleted, setStepsCompleted] = useState(0);
  const [displayDraw, setDisplayDraw] = useState(false);
  const [wishlists, setWishlist] = useState<string[]>([]);

  const { manito, setUser, assignManito, setDone, addAnswer } = useUser();

  useEffect(() => {
    if (!manito) {
      assignManito?.();
    }
  }, [manito, assignManito]);

  useEffect(() => {
    if (manito) {
      const getWL = async () => {
        const wls = await getWishList(manito);
        setWishlist(wls);
        setDisplayDraw(true);
      };
      getWL();
    }
  }, [manito]);

  const validateUser = async (answer: string) => {
    const isValid = await isValidParticipant(answer);
    if (isValid) {
      const usersInfo = await getParticipantById(answer);
      setUser?.({
        code: answer,
        name: usersInfo?.name as string,
      });
    }
    return isValid;
  };

  const questions = useMemo(
    () => [
      {
        question: 'Enter your code',
        required: true,
        validate: true,
        validateFn: validateUser,
      },
      {
        question: 'Wishlist (1/3)',
        required: true,
      },
      {
        question: 'Wishlist (2/3)',
        required: true,
      },
      {
        question: 'Wishlist (3/3)',
        required: true,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleNext = (nextStep: number, answer: string) => {
    setStepsCompleted(nextStep);
    addAnswer?.(answer);
  };

  useEffect(() => {
    if (stepsCompleted === questions.length) {
      setDone?.(true);
      setTimeout(() => {
        setDisplayDraw(true);
      }, 1000);
    }
  }, [questions.length, setDone, stepsCompleted]);

  return (
    <Container>
      <DisplayContainer show={!displayDraw}>
        <Question
          {...questions[stepsCompleted]}
          stepsCompleted={stepsCompleted}
          maxSteps={questions.length}
          onNext={handleNext}
        />
      </DisplayContainer>
      <DisplayContainer show={displayDraw}>
        <Manito name={manito} wishlists={wishlists} />
      </DisplayContainer>
    </Container>
  );
};

export default QuestionsPage;
