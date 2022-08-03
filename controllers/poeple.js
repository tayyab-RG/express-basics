const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function getPeople() {
  return await prisma.people.findMany();
}

async function addPerson(name) {
    if (!name) return false;

    return await prisma.people.create({
        data: {
        name: name,
        },
    })
};

module.exports = {addPerson, getPeople};