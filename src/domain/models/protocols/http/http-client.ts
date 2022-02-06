export interface IHttpRequest {
    url: string;
    method: HttpMethod;
    body?: any;
    headers?: any;
}

export interface IHttpClient<R = any> {
    request: (data: IHttpRequest) => Promise<IHttpResponse<R>>;
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

export enum HttpStatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    serverError = 500
  }

export interface IHttpResponse<T = any> {
    statusCode: HttpStatusCode;
    body?: T;
}
