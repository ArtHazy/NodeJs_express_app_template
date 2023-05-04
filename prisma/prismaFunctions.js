/////////////////////////
// ESSENTIALS

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



/////////////////////////
// OPTIONAL

// example:

// export async function createUser(name, email, password) {
//     return prisma.user.create({
//       data: {
//         name,
//         email,
//         password,
//       },
//     });
//   }
  
//   export async function deleteUser(id) {
//     return prisma.user.delete({
//       where: {
//         id,
//       },
//     });
//   }