export default function PatientForm() {
    return (
        <div className="mx-5 md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl font-black text-center">Seguimiento Pacientes</h2>

            <p className="mt-5 mb-10 text-lg text-center">
                Añade Pacientes y {''}
                <span className="font-bold text-rose-600">Administralos</span>
            </p>

            <form
                className="px-5 py-10 mb-10 bg-white rounded-lg shadow-md"
                noValidate
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm font-bold uppercase">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3 border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm font-bold uppercase">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3 border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm font-bold uppercase">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3 border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm font-bold uppercase">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3 border border-gray-100"
                        type="date"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm font-bold uppercase">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3 border border-gray-100"
                        placeholder="Síntomas del paciente"
                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="w-full p-3 font-bold text-white uppercase transition-colors cursor-pointer bg-rose-600 hover:bg-rose-700"
                    value='Guardar Paciente'
                />
            </form>
        </div>
    )
}