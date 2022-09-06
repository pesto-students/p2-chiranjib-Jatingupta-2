const httpStatus = require('http-status');
const { Incomes } = require('../models');
const ApiError = require('../utils/ApiError');
var mongoose = require("mongoose");


/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
 const getFundsBytype = async (type) => {
  return Incomes.find({ detailType:type });
};

const getFilteredFundsBytype = async (type,details) => {
  return Incomes.find({ detailType:type,dated:{$gte:details.startDate,$lte:details.endDate} });
};

const addFundsBytype = async (fund) => {
  return Incomes.create({
    ...fund
  });
};

const updateFundsBytype = async (fund) => {
  let tempFund = {...fund}
  delete tempFund.id
  return Incomes.findByIdAndUpdate(fund.id,{...tempFund})
}

const deleteFundsBytype = async (id) => {
  await Incomes.findByIdAndUpdate(id,{status:'deleted'})
  return Incomes.findById(id);
}




module.exports = {
  getFundsBytype,
  addFundsBytype,
  updateFundsBytype,
  deleteFundsBytype,
  getFilteredFundsBytype
};
