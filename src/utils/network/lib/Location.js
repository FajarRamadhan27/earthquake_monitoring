import axiosClient from "../AxiosClient"

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
