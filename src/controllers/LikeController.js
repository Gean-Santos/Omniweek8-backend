const Dev = require('../models/Dev')
module.exports = {
    async store(req, res){
        const { user } = req.headers
        const { devId } = req.params

        const loggerdDev = await Dev.findById(user)
        const targetDev = await Dev.findById(devId)

        if(!targetDev){
            return res.status(400).json({error: 'Dev not exists'})
        }

        if(targetDev.likes.includes(loggerdDev._id)){
            console.log('DEU MATCH');
            
        }

        loggerdDev.likes.push(targetDev._id)

        await loggerdDev.save()

        return res.json(loggerdDev)
        
    }
}