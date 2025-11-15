// src/lib/validations/user.ts
import { z } from 'zod';

export const roleEnum = z.enum([
  'MAIN_ADMIN',
  'FINANCE_ADMIN',
  'EXAMS_ADMIN',
  'RESULTS_ADMIN',
  'DEPARTMENT_ADMIN',
  'TEACHER',
  'STUDENT',
]);

export const userCreateSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().optional(),
  password: z.string().min(8),
  roles: z.array(roleEnum).nonempty(),
});

export const userUpdateSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().optional(),
  isActive: z.boolean().optional(),
  roles: z.array(roleEnum).optional(),
});

export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
