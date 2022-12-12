import { isValidParticipant } from '../utils/db';

export const questions = [
  {
    question: 'Enter your code',
    required: true,
    validate: true,
    validateFn: async (answer: string) => {
      return await isValidParticipant(answer);
    },
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
];
