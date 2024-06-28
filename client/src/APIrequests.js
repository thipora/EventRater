
export class APIrequests {
    async postRequest(url, body) {
        try {
            const response = await fetch('http://localhost:8083' + url, {
                method: 'POST',
                'credentials': 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            return response;
        } catch (error) {
            throw error;
        };
    }

    async getRequest(url, params = {}) {
        try {
            console.log('http://localhost:8083' + url);

            const response = await fetch('http://localhost:8083' + url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            throw error;
        };
    }
}