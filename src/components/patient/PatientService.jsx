import { api } from "../utils/api";
export async function getPatients() {
  try {
    const result = await api.get("/patients/get-all-patients");
    return result.data;
  } catch (error) {
    throw error;
  }
}



/* Assignment */


/* Implement the Patients API form the backend to the Frontend */

//. The Backend:

//1.  Implement the backend Controller, Service, and Repository.

//2. Create the endpoint to get all the patients and send to forntend.
//3. Transfer all feedback messages and endpoint string to the appropriate classes.


// The Frontend:

//1. Receive the patients data from the backend and display them on
//   the PatientComponent in the Admin Dashboard

//2. Complete the UserFilter component and use it to filter patients by email on the PatientComponent.

//  Remember to the all neccessary imports.

 // Goodluck :-)

