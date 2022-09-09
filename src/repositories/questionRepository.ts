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

async function getQuestionById(questionId:number){
    return await prisma.question.findUnique({
        where: {
            id: questionId
        },
        include: {
            Answer: {
                select: {
                    answeredBy: true,
                    answer: true
                }
            }
          }
    });
}

export { insert, getQuestions, getQuestionById };