const express = require('express');
const { fundController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { fundsValidation } = require('../../validations');
var multer  = require('multer')

// const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/fund/:type')
  // .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
  .post(
      auth('manageFunds'), 
      validate(fundsValidation.addFunds),
      fundController.addFunds
  )
  .put(
    // auth('manageFunds'), 
    validate(fundsValidation.updateFunds),
    fundController.updateFunds
  )
  .delete(
    auth('manageFunds'), 
    validate(fundsValidation.deleteFunds),
    fundController.deleteFunds
  )
  .get(
    auth('getFunds'),
    validate(fundsValidation.getFunds),
    fundController.getFunds
    );

    router
  .route('/filtered/:type')
  // .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
  .post(
      // auth('getFunds'), 
      validate(fundsValidation.filteredFunds),
      fundController.filteredFunds
  )


    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads')
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
  })
  var upload = multer({ storage: storage })

    router
  .route('/upload-pay-slip')
  .post(
    auth('manageFunds'), 
    upload.single('profile-file'), function (req, res, next) {
      // req.file is the `profile-file` file
      // req.body will hold the text fields, if there were any
      console.log(JSON.stringify(req.file))
      var response = '<a href="/">Home</a><br>'
      response += "Files uploaded successfully.<br>"
      response += `<img src="${req.file.path}" /><br>`
      return res.send(response)
    }
  )

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
