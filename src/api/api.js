import axios from "axios";
import queryString from "query-string";

export async function api(endpoint, payload) {
   let base = "https://cloud.cimar.co.uk/api/v3/";
   let request;
   try {
      request = await axios.post(
         base + endpoint,
         queryString.stringify(payload)
      );
      if (request.data.status !== "OK")
         throw "API error: " + request.data.status;
   } catch (error) {
      return error;
   }
   return request?.data;
}
