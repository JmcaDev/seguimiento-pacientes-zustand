import { usePatienStore } from "../store/store"

function PatientList() {

  const patients = usePatienStore(state => state.patients)

  console.log(patients)

  return (
    <div>PatientList</div>
  )
}

export default PatientList