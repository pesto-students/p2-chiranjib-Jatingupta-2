const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { fundService } = require('../services');



const getFunds = catchAsync(async (req, res) => {

  const result = await fundService.getFundsBytype(req.params.type)
  res.send(result);
});

const filteredFunds = catchAsync(async (req, res) => {

  const result = await fundService.getFilteredFundsBytype(req.params.type,req.body)
  res.send(result);
});


const addFunds = catchAsync(async (req, res) => {

  const result = await fundService.addFundsBytype(req.body)
  res.send(result);
});

const updateFunds = catchAsync(async (req, res) => {

  const result = await fundService.updateFundsBytype(req.body)
  res.send(result);
});

const deleteFunds = catchAsync(async (req, res) => {

  const result = await fundService.deleteFundsBytype(req.params.type)
  res.send(result);
});




module.exports = {
  getFunds,
  addFunds,
  updateFunds,
  deleteFunds,
  filteredFunds
};
