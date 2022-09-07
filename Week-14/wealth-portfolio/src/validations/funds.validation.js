const Joi = require('joi');

const getFunds = {
  params: Joi.object().keys({
    type: Joi.string(),
  }),
};

const filteredFunds = {
  params: Joi.object().keys({
    type: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      startDate: Joi.string(),
      endDate: Joi.string(),
    })
    .min(1),
};

const addFunds = {
  params: Joi.object().keys({
    type: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      detailType: Joi.string().valid('Assets', 'Equity', 'Income', 'Alternatives'),
      detailName: Joi.string(),
      detailAmount: Joi.number(),
      user: Joi.string(),
      dated: Joi.string(),
      status: Joi.string().valid('active', 'deleted'),
    })
    .min(1),
};

const updateFunds = {
  params: Joi.object().keys({
    type: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      id: Joi.string(),
      detailType: Joi.string().valid('Assets', 'Equity', 'Income', 'Alternatives'),
      detailName: Joi.string(),
      detailAmount: Joi.number(),
      user: Joi.string(),
      dated: Joi.string(),
      status: Joi.string().valid('active', 'deleted'),
    })
    .min(1),
};

const deleteFunds = {
  params: Joi.object().keys({
    type: Joi.string(),
  }),
};

module.exports = {
  getFunds,
  addFunds,
  updateFunds,
  deleteFunds,
  filteredFunds,
};
