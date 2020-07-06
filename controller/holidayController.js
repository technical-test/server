const Holiday = require('../models/Holiday')

exports.createHoliday = async (req, res) => {

    try {
        const holiday = new Holiday(req.body)
        console.log(holiday)
        holiday.save();
        res.json(holiday);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}


exports.listHoliday = async (req, res) => {
    try {
            await Holiday.find({}, async (err,holiday) => {
            res.status(200).json({holiday})
            if(err){
            res.status(500).json({msg:'error server'})
            }
        })
    }catch(error){
        console.error(error)
        res.status(500).json({msg:'error'})
    }   

}


exports.toUpdateHoliday = async (req, res) => {

    try {

        let holidayss = await Holiday(req.body) 
            const newHoliday ={
                "dia":req.body.dia,
                "info": req.body.info,
                "mes": req.body.mes,
                "motivo" : req.body.motivo,
                "tipo" : req.body.tipo
            }

        holidayss =await Holiday.findOneAndUpdate({ _ids: req.body._ids }, {$set:newHoliday},{new: true})    

        res.json({holidayss})

    }catch(error){
        res.status(500).send('Error en el servidor')
    }
}

