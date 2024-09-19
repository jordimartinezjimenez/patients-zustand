import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

export default function PatientList() {

    const { patients } = usePatientStore()

    return (
        <div className="overflow-y-scroll md:w-1/2 lg:w-3/5 md:h-screen">
            {patients.length ? (
                <>
                    <h2 className="text-3xl font-black text-center">Listado de Pacientes</h2>
                    <p className="mt-5 mb-10 text-xl text-center">
                        Administra tus {""}
                        <span className="font-bold text-teal-600">Pacientes y Citas</span>
                    </p>
                    {patients.map(patient => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
                    <p className="mt-5 mb-10 text-xl text-center">
                        Comienza agregando pacientes {''}
                        <span className="font-bold text-teal-600">y aparecerán en este lugar</span>
                    </p>
                </>
            )
            }
        </div >
    )
}
