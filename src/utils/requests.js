import axios from "axios";

const testBaseURL = "https://somebaseurl";

const users = {
  doTest: () =>
    axios({
      url: "/entries",
      baseURL: testBaseURL,
      method: "get",
    }),
};

export default { users };
