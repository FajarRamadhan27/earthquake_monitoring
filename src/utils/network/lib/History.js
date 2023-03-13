import moment from "moment";
import axiosClient from "../AxiosClient"

export function getHistory(params, setState) {
  axiosClient.get('/get_history', { params: params })
    .then(res => {
      const { data } = res.data

      if (!Array.isArray(data)) {
        setState([]);
        return
      }

      const formattedData = data.map((originalData) => {
        const { kelembaban_tanah, curah_hujan, kemiringan, pergerakan_tanah, date } = originalData

        const formattedDate = moment(date, 'YYYYMMDDHHmmssSSS').format('YYYY-MM-DD HH:mm:ss');

        return { humidity: kelembaban_tanah, rainfall: curah_hujan, slope: kemiringan, landslide: pergerakan_tanah, date: formattedDate }
      })
      setState(formattedData)
    })
}
