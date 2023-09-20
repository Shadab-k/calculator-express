const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Data = require('../models/Data');




// Define the route for creating data
router.post('/create-data', [
    body('name').notEmpty().withMessage('name is required'),
    body('calculation').notEmpty().withMessage('calculation is required'),
    body('result').notEmpty().withMessage('result is required')
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, calculation, result } = req.body;
        const idToUpdate = req?.body?.id;
        if (idToUpdate) {
            const updateData = await Data.findByIdAndUpdate(idToUpdate, { name, calculation, result });
            if (!updateData) {
                res.status(400).json({ error: 'Error updating Data' })
            }
            res.json({ name, calculation, result, _id: idToUpdate });
        }
        else {

            const newData = new Data({
                name,
                calculation,
                result
            });
            Data.create(newData)
            res.json(newData);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


// // Define the route for deleting data

router.delete('/remove-data/:id', async (req, res) => {

    try {
        const idToDelete = req.params.id;

        const deletedData = await Data.findByIdAndRemove(idToDelete);

        if (!deletedData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.json({ message: 'Data deleted', deletedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }

});



// Define the route for getting all data
router.get('/get-data', async (req, res) => {
    try {
        // Use Mongoose to find all data
        const allData = await Data.find();
        res.json(allData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
