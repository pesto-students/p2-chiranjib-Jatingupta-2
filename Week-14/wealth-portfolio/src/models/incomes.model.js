const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const tokenSchema = mongoose.Schema(
  {
    detailType:{
      type: String,
      enum: ["Assets", "Equity", "Income", "Alternatives"],
      required: true,
    },
    detailName: {
      type: String,
      required: true,
    },
    detailAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    dated: {
      type: Date,
      required: true,
    },
    status:{
      type: String,
      enum: ["active", "deleted"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);

/**
 * @typedef Income
 */
const Income = mongoose.model('Income', tokenSchema);

module.exports = Income;
