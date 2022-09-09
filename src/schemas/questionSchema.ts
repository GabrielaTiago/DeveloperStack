import Joi from 'joi';
import { IQuestionData } from '../types/questionTypes';

export const questionSchema = Joi.object<IQuestionData>({
  askedId: Joi.string().required(),
  question: Joi.string().required()
});
