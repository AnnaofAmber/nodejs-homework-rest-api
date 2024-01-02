const express = require("express");
const router = express.Router();

const { validateBody, auth } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/user");

// --signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// --signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", auth, ctrl.getCurrent);

router.post("/logout", auth, ctrl.logout);

module.exports = router;
