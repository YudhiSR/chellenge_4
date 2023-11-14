import path from "path";

export const PORT = 1111;
export const HOST = "localhost";

export interface IErrorResponse {
  message: string;
  status: string;
}
export const REQ_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};

export const STATIC_URL = {
  "js-content": "/public/script",
  "css-content": "/public/css/",
  "assets-content": "/public/assets/"
};

export const PUBLIC_DIR = path.join(__dirname, "../../public");
