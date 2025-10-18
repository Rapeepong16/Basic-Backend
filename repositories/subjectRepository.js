const {PrismaClient} = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
    findAll: async function () {
        return await prisma.subject.findMany();
    },
    findById: async function (id) {
        return await prisma.subject.findMany({ where: { id: id } });
    },
    save: async function (subject) {
        return await prisma.subject.createMany({data: subject});
    },
    update: async function (subject) {
        return await prisma.subject.updateMany({where: {id: subject.id}, data: subject});
    },
    delete: async function (id) {
        return await prisma.subject.delete({where: {id: id}});
    }
}