import { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'

import { toast } from 'react-toastify'

import { usePatienStore } from '../store/store'

type PatientDetailsProps = {
    patient: Patient
}

function PatientDetails({patient} : PatientDetailsProps) {

    const { deletePatient, getPatientById } = usePatienStore()

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error("¡Paciente eliminado exitosamente!")
    }

  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
        <PatientDetailItem label="ID" data={patient.id}/>

        <PatientDetailItem label="Nombre" data={patient.name}/>

        <PatientDetailItem label="Propietario" data={patient.caretaker}/>

        <PatientDetailItem label="Email" data={patient.email}/>

        <PatientDetailItem label="Fecha de Alta" data={patient.date.toString()}/>

        <PatientDetailItem label="Sintomas" data={patient.symptoms}/>
        <div className='flex justify-between mt-10 flex-col lg:flex-row gap-3'>
            <button
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                onClick={() => getPatientById(patient.id)}
            >Editar</button>

            <button
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                onClick={handleClick}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default PatientDetails