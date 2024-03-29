const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });

});
router.get('/getall', (req, res) => {
    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});


router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });


})
router.get('/getyid/:id', (req, res) => {
    console.log(req.params.id);
    Model.find({ id: req.params.id })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    Model.findByIdAndDelete({ id: req.params.id })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.put('/update/:id', (req, res) => {
    console.log(req.params.id);
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.post('/authenticate', (req, res) => {

    Model.findOne(req.body)
        .then((result) => {
            if (result !== null) {
                res.json(result);
            }
            else {
                res.status(401).json(result);
            }
        }).catch((err) => {
            res.status(500).json(err);
        });
});

// get use for fetching textual data
// post use for every data

module.exports = router;