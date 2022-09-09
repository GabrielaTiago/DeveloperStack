import * as questionRepository from "../repositories/questionRepository";
import { IQuestionData } from "../types/questionTypes";

async function createQuestion(questionBody: IQuestionData) {
    await questionRepository.insert(questionBody);
}


export { createQuestion };