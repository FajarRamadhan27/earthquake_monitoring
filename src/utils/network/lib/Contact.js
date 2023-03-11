import axiosClient from "../AxiosClient"

export function getContacts(setState) {
  axiosClient.get('/register_notif')
    .then(res => {
      const { data } = res.data
      const formattedData = data.map((originalData) => {
        const { user_name, user_phone, user_address, user_title, ...rest} = originalData
        return { name: user_name, phone: user_phone, address: user_address, title: user_title, ...rest }
      })
      setState(formattedData)
    })
}
