import prismClient from "../../prisma";

class GetLast3MessagesService {
    async execute() {
        const messages = await prismClient.message.findFirst({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true
            }
        })

        return messages
    }
}

export { GetLast3MessagesService }