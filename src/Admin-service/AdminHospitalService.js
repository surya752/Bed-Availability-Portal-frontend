import axios from "axios"
const ADMINHOSPITAL_URL = "http://localhost:1111/hospitals/"
const ADMINADDBED_URL = "http://localhost:1333/AddBed/"
class AdminHospitalService
{
    getAllHospitals() {
		return axios.get(ADMINHOSPITAL_URL + 'getAll')
	}
  getAllBeds() {
		return axios.get(ADMINADDBED_URL + 'getAll')
	}
    getById(id) {
		return axios.get(ADMINHOSPITAL_URL + 'get/'+id)
	}
    addHospital(hospital) {
		return axios.post(ADMINHOSPITAL_URL + 'save',hospital)
	}
  addBed(bed) {
		return axios.post(ADMINADDBED_URL + 'addbeds',bed)
	}
    searchHospitalByName(name){
        return axios.get(ADMINHOSPITAL_URL + 'searchName/'+name)
    }
    searchHospitalByType(type){
        return axios.get(ADMINHOSPITAL_URL + 'searchType/'+type)
    }
    deleteHospital(id) {
		return axios.delete(ADMINHOSPITAL_URL + 'delete/' + id)
	}
  deleteBed(id) {
		return axios.delete(ADMINADDBED_URL + 'delete/' + id)
	}
    editHospital(hospital, id) {
		return axios.put(ADMINHOSPITAL_URL + 'update/' + id, hospital)
	}
}
export default new AdminHospitalService();