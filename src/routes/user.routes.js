const router = require('express').Router();
const inputValidator = require('../utils/inputValidator');
const InputUserDTO = require('../dto/input.user.dto');

router.post('/', async (req, res) => {
    try{
        const userInput = new InputUserDTO(req.body).build();
        const validator = inputValidator(userInput);
        if(!validator.success){
            return res.status(400).json({
                success: false,
                message: validator.message,
            });
        }
        // HERE THE LOGIC TO SAVE THE USER
        res.status(200).json({
            success: true,
            data: userInput,
        });
    }catch(err){    
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
});
