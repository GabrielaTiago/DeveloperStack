import * as answerRepository from "../repositories/answerRepository";
import { IAnswerData } from "../types/answerTypes";

async function createAnswer(questionId: number, answerBody: IAnswerData) {
    await answerRepository.insertAnswer(questionId, answerBody);
}

export { createAnswer };