import axios, { AxiosResponse } from 'axios';
import { IHttpClient, IHttpRequest, IHttpResponse } from '../../domain/models/protocols/http';

export class AxiosHttpClient implements IHttpClient {
  async request (data: IHttpRequest): Promise<IHttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
