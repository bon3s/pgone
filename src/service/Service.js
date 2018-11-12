import { NetInfo } from "react-native";

function sendRequest(url, options, timeout = 7000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error("The connection was broken or timed out.")),
        timeout
      )
    )
  ]);
}

class REST {
  constructor(hostUrl, timeout, token, type) {
    this.hostUrl = hostUrl;
    this.timeout = timeout;
    this.token = token;
    this.type = type;
  }

  async getText(count, string) {
    const body = {
      count: count,
      string: string
    };

    const myHeaders = {
      "Content-Type": "application/json",
      type: this.type, //no-cors for no-cors flag on server
      "X-Auth-Token": this.token
    };

    const options = {
      method: "POST",
      credentials: "include",
      headers: myHeaders,
      body: JSON.stringify(body)
    };
    try {
      const res = await sendRequest(this.hostUrl, options, this.timeout);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}

class checkConnectivity {
  constructor(next) {
    this.next = next;
  }

    getText(count, string) {
    return NetInfo.isConnected.fetch().then(async isConnected => {
      if (isConnected) {
        try {
          return await this.next.getText(count, string);
        } catch (e) {
          console.log(e);
        }
      } else {
        throw new Error("No internet connection");
      }
    });
  }
}

const service = new checkConnectivity(
  new REST("http://192.168.1.105:2323", 30000, "marko1234", "cors")
);

export default service;
