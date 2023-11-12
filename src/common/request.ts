import ky, { Hooks, Options } from "ky";
const { VITE_HOST } = import.meta.env;

type RequestResponse = {
  code: number;
  data: any;
  error?: string;
};

const token = "jwt token";

const hooks: Hooks = {
  // 请求前处理
  beforeRequest: [
    (request) => {
      request.headers.set("Authorization", `Bearer ${token}`);
    },
  ],

  // 处理请求结果
  afterResponse: [
    async (request, options, response) => {
      if (response.ok) {
        const json: RequestResponse = await response.json();
        if (json.code === 0) {
          return json.data;
        } else {
          // 提示用户发生错误
          // alert(json.error)
        }
      }
      if (response.status === 403) {
        // Get a fresh token
        // const token = await ky('https://example.com/token').text();

        // Retry with the token
        // request.headers.set('Authorization', `token ${token}`);

        // return ky(request);
        return response;
      }
    },
  ],

  // 处理错误
  beforeError: [
    (error) => {
      const { response } = error;
      if (response && response.body) {
        error.name = "Request Error";
        error.message = `${response.body} (${response.status})`;
      }

      return error;
    },
  ],
};
const api = ky.create({ prefixUrl: VITE_HOST, hooks });

export const request = {
  /**
   * ky request
   * @param url
   * @param method
   * @param options
   * @returns
   */
  fetch: async <T>(
    url: string,
    method: string,
    options?: Options,
  ): Promise<T | null> => {
    try {
      return await api(url, {
        method,
        ...options,
      }).json<T>();
    } catch (error) {
      console.log(error);
    }
    return null;
  },

  /**
   * http get
   * @param url
   * @param options
   * @returns
   */
  get: async <T>(url: string, options?: Options) => {
    return request.fetch<T>(url, "get", options);
  },

  /**
   * http post
   * @param url
   * @param options
   * @returns
   */
  post: <T>(url: string, options?: Options) => {
    return request.fetch<T>(url, "post", options);
  },
};
