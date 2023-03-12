import axiosClient from "../AxiosClient"

export function createContact(data, setState) {
  var formData = new FormData();

  formData.append("location_id", data.location_id)
  formData.append("user_name", data.name)
  formData.append("user_phone", data.phone)
  formData.append("user_address", data.address)
  formData.append("user_title", data.title)

  axiosClient.post('/register_notif', formData)
    .then(res => setState(res))
}

export function getContacts(params, setState) {
  axiosClient.get('/get_info_send', { params: params})
    .then(res => {
      const { data } = res.data

      if (!Array.isArray(data)) {
        setState([]);
        return
      }

      const formattedData = data.map((originalData) => {
        const { user_name, user_phone, user_address, user_title, ...rest} = originalData
        return { name: user_name, phone: user_phone, address: user_address, title: user_title, ...rest }
      })
      setState(formattedData)
    })
}
