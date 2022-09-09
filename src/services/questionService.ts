import * as questionRepository from "../repositories/questionRepository";
import { IQuestionData } from "../types/questionTypes";

async function createQuestion(questionBody: IQuestionData) {
    await questionRepository.insert(questionBody);
}

async function  getQuestions() {
    return await questionRepository.getQuestions();
}

export { createQuestion, getQuestions };