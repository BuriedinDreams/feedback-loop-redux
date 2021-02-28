const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
  console.log('SERVER SIDE POST',req.body);
  const feeling =  Number(req.body.feeling);
  const understanding = Number(req.body.understanding);
  const support = Number(req.body.support);
  const comments = (req.body.comments);


  const SurveyResults = req.body; // add Number(req.body.feeling) ,req.body.understanding etc.
  console.log('SurveyResults',SurveyResults);
  const sqlText = `INSERT INTO "feedback" 
                  ("feeling", "understanding", "support", "comments") 
                  VALUES ($1, $2, $3, $4)`;

  pool.query(sqlText, [feeling, understanding, support, comments ])
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error in SERVER POST SIDE ${sqlText}`, error);
          res.sendStatus(500);
      });
});







module.exports = router;