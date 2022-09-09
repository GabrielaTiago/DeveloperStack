import { prisma } from "../config/database";
import { IAnswerData } from "../types/answerTypes";


async function insertAnswer(questionId: number, answerData: IAnswerData) {
    await prisma.answer.create({
        data: {questionId, ...answerData}
    });
}

export { insertAnswer };