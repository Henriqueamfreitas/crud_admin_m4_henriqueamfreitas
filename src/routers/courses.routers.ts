import { Router } from "express";
import "dotenv/config";
import { validateBodyMiddleware, token } from "../middlewares/validateBody.middleware";
import { courseCreateSchema } from "../schemas/course.schema";
import { createCourseController, getAllCoursesController, assignUserToCourseController 
} from "../controllers/courses.controllers";
import { ensureTokenIsAdminMiddleWare, ensureUserIdAndCourseIdExistsMiddleWare 
} from "../middlewares/verify.middleware";

const coursesRouter: Router = Router()

coursesRouter.get('', getAllCoursesController)
coursesRouter.use(token)
coursesRouter.post('/', ensureTokenIsAdminMiddleWare, validateBodyMiddleware(courseCreateSchema), 
createCourseController)
coursesRouter.post(
    '/:courseId/users/:userId', ensureTokenIsAdminMiddleWare, ensureUserIdAndCourseIdExistsMiddleWare,
assignUserToCourseController)

export { coursesRouter }