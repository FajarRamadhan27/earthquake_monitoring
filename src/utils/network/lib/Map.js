import axiosClient from "../AxiosClient"

export function getDevicesPosition(setState) {
  axiosClient.get('/get_list_marker')
    .then(res => {
      const { data } = res.data
      const formattedData = data.map((originalData) => {
        const { city_name, lat, long, ...rest} = originalData
        return { name: city_name,  lat: parseFloat(lat), lng: parseFloat(long),...rest }
      })
      setState(formattedData)
    })
}
