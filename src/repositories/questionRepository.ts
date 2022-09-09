import { prisma } from "../config/database";
import { IQuestionData } from "../types/questionTypes";

// async function findWhoAsked (){
//    return await prisma.question.findFirst();
// }

// async function  findExistingQuestion (){
//     return await prisma.question.findFirst();
// }

async function insert (question: IQuestionData) {
    await prisma.question.create({
        data: question
    });
}

export { insert };