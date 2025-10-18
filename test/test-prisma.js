const {PrismaClient} = require("../generated/prisma");
const prisma = new PrismaClient();

async function main() {
    const subjects = await prisma.subject.findMany();
    console.log(subjects);
}

main();