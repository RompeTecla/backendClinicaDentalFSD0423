
const { Pacient, Appointment, Dentist, Treatment} = require("../models");

const pacientController = {};

// Función para la creación de nuevos pacientes.

pacientController.createPacient = async (req, res) => {

    try {
        const { user_id, } = req.body;

        const newPacient = {
            user_id : user_id,
        }
           // Guardar la info
        const pacient = await Pacient.create(newPacient)

        return res.json(pacient)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

// Función para mostrar todos los pacientes.

pacientController.getPacient = async(req, res)=> {
    
    try{

        const pacient = await Pacient.findAll();

        return res.json(pacient);

    }catch(error){

    return res.status(500).send(error.message)
    }
};

// Función para mostrar un paciente por su id.

pacientController.getPacientById = async (req, res) => {

    try{

        const pacienttId = req.userId

        const pacientAppointment = await Pacient.findAll(
            {
                where: 
                {
                    user_id: pacienttId
                },

        include: [
            Appointment,
            {
                model: Appointment,
                attributes: {
                    exclude: ["pacient_id","dentist_id","treatment_id", "createdAt", "updatedAt"],
                },  
                include:{
                    model: Dentist,
                    attributes: {
                        exclude: ["dentist_id","createdAt", "updatedAt"],
                        include: [ "speciality_id"]
                    },
                },
            },
            {
                model: Appointment,
                attributes: {
                    exclude: ["pacient_id","dentist_id", "createdAt", "updatedAt"],
                },
                include:{
                    model: Treatment,
                    attributes: {
                        exclude: ["treatment_id","createdAt", "updatedAt"],
                        include:["name", "duration", "price", "session_num", "status"] 
                    },
                },
            },
        ]
    })
    
    return res.json(pacientAppointment);

}catch(error){
    return res.status(500).send(error.message)
}
};

// Funcion para modificar un paciente por su id.

pacientController.putPacientById = async (req, res) =>{

try{

    const pacientId = req.params.id

    const { user_id, speciality_id,name, surname, email, address,phone,date_of_birth,gender,postcode } = req.body;

    const updatePacient = await Pacient.update({user_id, speciality_id,name:name,surname:surname,email:email,address:address,phone:phone,date_of_birth:date_of_birth,gender:gender,postcode:postcode}, {where:{id:pacientId}})

    return res.json(updatePacient)

}catch(error){

    return res.status(500).send(error.message)
}
};

// Función para que un dentista elimine un paciente por su id.

pacientController.deletePacientById = async(req, res) => {

try{

    const pacientId = req.params.id

    const deletePacient = await Pacient.destroy({where: { id: pacientId}})

    return res.json(deletePacient);

}catch(error){

    return res.status(500).send(error.message)
}
};

module.exports =  pacientController