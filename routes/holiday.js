const express = require('express')
const router = express.Router()
const holidayController = require('../controller/holidayController')



router.post('/', 

    holidayController.createHoliday
)

router.get('/', 
    holidayController.listHoliday
)


router.put('/', 
    holidayController.toUpdateHoliday
)


module.exports = router;


