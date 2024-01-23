import axios from "axios";
import useSwr from 'swr'

export default class BaseApi {

  static async get(URL:any) {
    return await axios.get(URL)
  }

  static swr(URL:any) {
    const fetcher = (link:any) => this.get(link);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading, error } = useSwr(
      URL,
      fetcher
    )

    return {
      data: data ? data.data : data,
      isLoading,
      error
    }
  }
}