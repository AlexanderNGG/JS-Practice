export class SetupService {
    constructor(baseUrl) {
        this.url = `${baseUrl}/data/setups`;
        this.accessToken = 'accessToken';
    }

    getAccessToken () {
        return localStorage.getItem(this.accessToken)
    }

    async getAll() {
        let settings = {
            method: 'GET'
        };

        let response = await fetch(`${this.url}?sortBy=_createdOn%20desc`, settings);
        let result = await response.json();
        return result;
    }

    async get(id) {
        let settings = {
            method: 'GET'
        };

        let response = await fetch(`${this.url}/${id}`, settings);
        let result = await response.json();
        return result;
    }

    async addSetup(setUp) {
        let accessToken = this.getAccessToken();
        let settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify(setUp)
        };

        let response = await fetch(`${this.url}`, settings)
        if(!response.ok) {
            window.alert('Add Setup failed');
            return;
        }

        let result = await response.json();
        return result;
    }
}