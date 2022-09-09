import { prisma } from "../config/database";
import { IQuestionData } from "../types/questionTypes";

async function insert (question: IQuestionData) {
    await prisma.question.create({
        data: question
    });
}

async function getQuestions () {
    return await prisma.question.findMany();   
}

export { insert, getQuestions };