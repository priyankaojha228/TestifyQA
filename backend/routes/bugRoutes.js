const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

router.post('/create', async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
