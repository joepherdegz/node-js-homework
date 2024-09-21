import express from "express";
import { controlWrapper } from "../../helpers/controlWrapper.js";
import { signupUser, loginUser, logoutUser, getCurrentUsers, updateUserSubscription, updateAvatar, verifyEmail, resendVerifyEmail } from "../../controllers/usersController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";
import { upload } from "../../middlewares/upload.js";

const router = express.Router();

/* POST: // http://localhost:3000/api/users/signup
{
  "email": "example@example.com",
  "password": "examplepassword"
}
*/
router.post("/signup", controlWrapper(signupUser));

/* POST: // http://localhost:3000/api/users/login
{
  "email": "example@example.com",
  "password": "examplepassword"
}
*/
router.post("/login", controlWrapper(loginUser));

/* GET: // http://localhost:3000/api/users/logout */
router.get("/logout", authenticateToken, controlWrapper(logoutUser));

/* GET: // http://localhost:3000/api/users/current */
router.get("/current", authenticateToken, controlWrapper(getCurrentUsers));

/* PATCH: // http://localhost:3000/api/users/
{
    "subscription":"pro"
}
*/
router.patch("/", authenticateToken, controlWrapper(updateUserSubscription));

/* PATCH: // http://localhost:3000/api/users/avatars
    form-data
    avatar,file : image
*/

// prettier-ignore
router.patch("/avatars", authenticateToken, upload.single("avatar"), controlWrapper(updateAvatar));

/* GET: // http://localhost:3000/api/users/verify/:verificationToken */
router.get("/verify/:verificationToken", controlWrapper(verifyEmail));

/* POST: // http://localhost:3000/api/users/verify 
{
  "email": "example@example.com",
}
*/
router.post("/verify", authenticateToken, controlWrapper(resendVerifyEmail));

export { router }; 