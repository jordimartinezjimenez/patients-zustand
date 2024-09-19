import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    return (
        <div className="px-5 py-10 mx-5 my-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Propietario" data={patient.caretaker} />
            <PatientDetailItem label="Email" data={patient.email} />
            <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
            <PatientDetailItem label="Síntomas" data={patient.symptoms} />

            <div className="flex justify-between gap-3 mt-10">
                <button
                    type="button"
                    className="px-10 py-2 font-bold text-white uppercase bg-teal-600 rounded-lg hover:bg-teal-700">
                    Editar
                </button>
                <button
                    type="button"
                    className="px-10 py-2 font-bold text-white uppercase rounded-lg bg-rose-600 hover:bg-rose-700">
                    Eliminar
                </button>
            </div>
        </div>
    )
}
