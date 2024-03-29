import { z } from "zod"

const isEmail = (value: string) => {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    return emailRegex.test(value);
};

const userSchema = z.object({
    id: z.number().positive().int(),
    name: z.string().max(50),
    email: z.string().refine(isEmail, {
        message: "Invalid email",
    }),
    password: z.string().max(120),
    admin: z.boolean().default(false).optional(),
})

const userCreateSchema = userSchema.omit({ id: true })
const userReturnSchema = userSchema.omit({ password: true })
const userLoginSchema = userSchema.omit({ id: true, name: true, admin: true })
const userReturnManySchema = userReturnSchema.array()

const userCoursesSchema = z.object({
    courseId: z.number().positive().int(),
    courseName: z.string().max(50),
    courseDescription: z.string(),
    userActiveInCourse: z.boolean(),
    userId: z.number().positive().int(),
    userName: z.string().max(50),
})

const userCoursesReturnManySchema = userCoursesSchema.array()


export {
    userSchema,
    userCreateSchema,
    userReturnSchema,
    userLoginSchema,
    userReturnManySchema,
    userCoursesSchema,
    userCoursesReturnManySchema
}