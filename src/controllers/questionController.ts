import { Request, Response } from 'express';
import { IAnswerData } from '../types/answerTypes';
import { IQuestionData } from '../types/questionTypes';

import * as questionServices from "../services/questionService";
import * as answerServices from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const questionBody: IQuestionData = req.body;

  await questionServices.createQuestion(questionBody);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const questionId: number = Number(req.params.id);
  const answerBody: IAnswerData = req.body;

  await answerServices.createAnswer(questionId, answerBody);

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionServices.getQuestions();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const questionId: number = Number(req.params.id);

  const questionById = await questionServices.getQuestionById(questionId);
  res.status(200).send(questionById);
}
