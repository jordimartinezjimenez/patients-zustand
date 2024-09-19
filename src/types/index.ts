export type Patient = {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
}

export type DraftPatient = Omit<Patient, 'id'>

export type PatientState = {
    patients: Patient[]
    addPatient: (patient: Patient) => void
    removePatient: (id: string) => void
}