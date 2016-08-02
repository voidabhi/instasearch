import $ from 'jquery'

/**
 * Instasearch
 */
class IS {

    /**
     * @param {Object} opts
     */
    constructor(opts) {
        this.opts = opts || {}
        this.opts.url = ''
        this.opts.client_id = ''
        this.otps.count = this.opts.count || 20
    }

    /**
     * @param {String} search
     */
    getTags(search) {
            return new Promise((resolve, reject) => {
                search = _clean(search)
                let url = 'https://api.instagram.com/v1/tags/' + search + '/media/recent'
                $.ajax({
                        type: 'GET',
                        url: url,
                        data: {
                            client_id: this.opts.client_id,
                        },
                        dataType: 'jsonp'
                    })
                    .done((res) => {
                        console.log(res)
                    })
                    .fail((err) => {
                        console.log(err);
                    })
            });
        }
        
    /**
     * Removes hashtag from the string
     */
    _clean(str) {
        // remove spaces from strings
        str = str.replace(/ /g, '')

        // remove hashtag
        if (str.charAt(0) == "#" || str.charAt(0) == '&#35;') {
            str = str.substr(1)
        }

        return str
    }

}

export default IS
