const express = require("express");
const router = express.Router();

const { validateBody, isValidId, auth } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const ctrl = require("../../controllers/contacts");

router.get("/", auth, ctrl.getAllContacts);

router.get("/:contactId", auth, isValidId, ctrl.getContactById);

router.post(
  "/",
  auth,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete("/:contactId", auth, isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  auth,
  isValidId,
  validateBody(schemas.updateSchema),
  ctrl.updateContact
);
router.patch(
  "/:contactId/favorite",
  auth,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
