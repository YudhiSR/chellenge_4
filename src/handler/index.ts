import http from "http";
import fs from "fs";
import path from "path";
import { IErrorResponse, PUBLIC_DIR } from "../consts";

const renderStaticPage = (page: string): string => {
  const htmlFilePath = path.join(PUBLIC_DIR, `${page}.html`);
  const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
  return htmlContent;
};

export const handleResponsePageError = (
  response: http.ServerResponse,
  method: string | undefined
): void => {
  const errResponse: IErrorResponse = {
    message: `method ${method} untuk / tidak diperbolehkan`,
    status: "gagal mendapatkan data"
  };
  response.statusCode = 400;
  response.end(JSON.stringify(errResponse));
};

export const handleResponsePageSuccess = (
  response: http.ServerResponse,
  page: string
): void => {
  try {
    const pageType = {
      index: renderStaticPage("index"),
      search: renderStaticPage("search")
    };
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.write(pageType[page]);
    response.end();
  } catch (error) {
    const errResponse: IErrorResponse = {
      message: `gagal menampilkan halaman`,
      status: "404"
    };
    response.statusCode = 404;
    response.end(JSON.stringify(errResponse));
  }
};

export const handleResponseContentSucess = (
  response: http.ServerResponse,
  url: string | undefined
): void => {
  const fileExtension = path.extname(url!);
  let contentType = "text/plain";
  if (fileExtension === ".ts") {
    contentType = "text/javascript";
  } else if (fileExtension === ".css") {
    contentType = "text/css";
  }
  try {
    const staticContent = fs.readFileSync(
      path.join(__dirname, `../..${url}`),
      "utf-8"
    );
    response.setHeader("Content-Type", contentType);
    response.statusCode = 200;
    response.write(staticContent);
    response.end();
  } catch (error) {
    response.statusCode = 404;
    response.end("File not found");
  }
};
