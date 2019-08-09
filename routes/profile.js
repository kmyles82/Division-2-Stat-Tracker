const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//Get request to backend
router.get('/:platform/:gamertag', async (req, res) => {
    try {
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        };
        //set parameters in variables
        const {
            platform,
            gamertag
        } = req.params;
        //fetch data from apex api and store in response
        const response = await fetch(
            `${process.env.TRACKER_API_URL}/${platform}/${gamertag}`, {
                headers
            }
        );
        //get back data from apex api in json
        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            return res.status(404).json({
                message: 'Profile not Found'
            })
        }

        //send data to client
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;