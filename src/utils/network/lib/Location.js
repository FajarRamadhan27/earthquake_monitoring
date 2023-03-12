import axiosClient from "../AxiosClient"

export function createLocation(data, setState) {
  var formData = new FormData();
  formData.append("city_name", data.name)
  axiosClient.post('/register_location', formData)
    .then(res => setState(res))
}

export function updateLocation(data, setState) {
  var formData = new FormData();
  formData.append("location_id", data.location_id)
  formData.append("city_name", data.name)
  axiosClient.post('/update_location', formData)
    .then(res => setState(res))
}

export function getLocation(setState) {
  axiosClient.get('/register_location')
    .then(res => {
      const { data } = res.data
      const formattedData = data.map((originalData) => {
        const { city_name, ...rest} = originalData
        return { name: city_name, ...rest }
      })
      setState(formattedData)
    })
}
