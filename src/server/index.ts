import http from "http";
import { PORT, HOST, REQ_METHOD, STATIC_URL } from "../consts";
import {
  handleResponsePageError,
  handleResponsePageSuccess,
  handleResponseContentSucess
} from "../handler";

const requestListener: http.RequestListener = (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const { method, url } = request;
  response.setHeader("Connection", "keep-alive");
  response.setHeader("X-Lang", "id-ID");
  if (url === "/") {
    if (method === REQ_METHOD.GET) {
      handleResponsePageSuccess(response, "index");
    } else {
      handleResponsePageError(response, method);
    }
  } else if (url === "/search") {
    if (method === REQ_METHOD.GET) {
      handleResponsePageSuccess(response, "search");
    } else {
      handleResponsePageError(response, method);
    }
  } else if (
    url!.startsWith(STATIC_URL["js-content"]) ||
    url!.startsWith(STATIC_URL["css-content"]) ||
    url!.startsWith(STATIC_URL["assets-content"])
  ) {
    handleResponseContentSucess(response, url);
  } else {
    response.statusCode = 404;
    response.end("halaman tidak ditemukan");
  }
};

const server: http.Server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
  console.log(`server berjalan pada http://${HOST}:${PORT}`);
});
