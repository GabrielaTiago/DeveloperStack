import { Request, Response } from 'express';
import { IQuestionData } from '../types/questionTypes';

import * as questionServices from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  const questionBody: IQuestionData = req.body;

  await questionServices.createQuestion(questionBody);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
