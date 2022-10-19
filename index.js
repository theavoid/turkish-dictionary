const axios = require('axios');

class Dictionary {
    async has(word) {
        const response = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);

        if (response.data.error) {
            return false;
        } else {
            return true;
        }
    }
    async get(word) {
        const response = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);

        if (response.data.error) {
            return new Error('Word not found');
        } else {
            return response.data[0];
        }
    }
    async isVerb(word) {
        const response = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);

        if (response.data.error) {
            return new Error('Word not found');
        } else {
            if (response.data[0].anlamlarListe.fiil == '0') {
                return false;
            } else {
                return true;
            }
        }
    }
    async isNoun(word) {
        const response = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);

        if (response.data.error) {
            return new Error('Word not found');
        } else {
            if (response.data[0].anlamlarListe.fiil == '0') {
                return true;
            } else {
                return false;
            }
        }
    }
    async isPlural(word) {
        const response = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);

        if (response.data.error) {
           return new Error('Word not found');
        } else {
            if (response.data[0].cogul_mu == '0') {
                return false;
            } else {
                return true;
            }
        }
    }
    async isProperNoun(word) {
        const response = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);

        if (response.data.error) {
            return new Error('Word not found');
        } else {
            if (response.data[0].ozel_mi == '0') {
                return false;
            } else {
                return true;
            }
        }
    }
    async getMeans(word) {
        const response = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);

        if (response.data.error) {
            return new Error('Word not found');
        } else {
            return response.data[0].anlamlarListe;
        }
    }
    async getExamples(word) {
        const response = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);

        if (response.data.error) {
            return new Error('Word not found');
        } else {
            return response.data[0].anlamlarListe[0].orneklerListe;
        }
    }
    
}

module.exports = Dictionary;