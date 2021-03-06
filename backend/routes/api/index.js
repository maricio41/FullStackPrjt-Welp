const router = require("express").Router();
const sessionRouter = require("./session");
const usersRouter = require("./users");
const businessRouter = require("./businesses");
const reviewRouter = require("./reviews");
// const asyncHandler = require("express-async-handler");
// const {
//   setTokenCookie,
//   restoreUser,
//   requireAuth,
// } = require("../../utils/auth.js");
// const { User } = require("../../db/models");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/businesses", businessRouter);

router.use("/reviews", reviewRouter);

// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req, res);
// });

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });
module.exports = router;
