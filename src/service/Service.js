sendRequest = function (url, options, timeout = 7000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('The connection was broken or timed out.')), timeout)
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

    getText(count, string) {
        const body = {
            count: count,
            string: string
        };

        const myHeaders = {
            "Content-Type": "application/json",
            type: this.type, //no-cors for no-cors flag on server
            'X-Auth-Token': this.token
        };

        const options = {
            method: "POST",
            credentials: "include",
            headers: myHeaders,
            body: JSON.stringify(body)
        };
        return await sendRequest(this.hostUrl, options, this.timeout);
    }
}

class checkConnectivity {
    constructor(next) {
        this.next = next;
    }

    getText(count, string) {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return this.next.getText(count, string);
            }
            else {
                throw new Error('No internet connection');
            }
        });
    }
}

const service = new checkConnectivity(new REST('http://192.168.1.104:2323', 30000, 'marko1234', 'cors'));

export default service;