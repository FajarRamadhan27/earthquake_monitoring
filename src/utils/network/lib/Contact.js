import axiosClient from "../AxiosClient"

export function getContacts(setState) {
  axiosClient.get('/register_notif')
    .then(res => {
      const { data } = res.data
      setState(data)
    })
}
