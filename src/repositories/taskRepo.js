import prisma from '../config/db.js';

export async function findAll({completed} = {}) {
  const res = {};

  if (completed !== undefined) {
    res.completed = completed; 
  }
  
  return prisma.task.findMany({res});
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
