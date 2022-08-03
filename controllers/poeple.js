const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function getPeople() {
  return prisma.people.findMany();
}

function addPerson(name) {
  if (!name) return false;

  return prisma.people.create({
      data: {
        name: name,
      },
  })
};

function updatePerson(id, name) {
  if (!name) return false;

  return prisma.people.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  })
}

function readPerson(id) {
  if (!id) return;

  return prisma.people.findUnique({
    where: {
      id: id,
    },
  })
}

function deletePerson(id) {
  if (!id) return;

  return prisma.people.delete({
    where: {
      id: id,
    },
  })
}

module.exports = {addPerson, getPeople, updatePerson, readPerson, deletePerson};