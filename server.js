// server.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/modeling-agency', { useNewUrlParser: true, useUnifiedTopology: true });

const agencyModel = mongoose.model('Agency', {
  name: String,
  description: String,
  contact: String
});

app.get('/api/agencies', (req, res) => {
  agencyModel.find().then(agencies => {
    res.json(agencies);
  });
});

app.post('/api/agencies', (req, res) => {
  const agency = new agencyModel(req.body);
  agency
