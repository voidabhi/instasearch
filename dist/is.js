'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Instasearch
 */

var IS = function () {

    /**
     * @param {Object} opts
     */

    function IS(opts) {
        _classCallCheck(this, IS);

        this.opts = opts || {};
        this.opts.url = '';
        this.opts.client_id = '';
        this.otps.count = this.opts.count || 20;
    }

    /**
     * @param {String} search
     */


    _createClass(IS, [{
        key: 'getTags',
        value: function getTags(search) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                search = _clean(search);
                var url = 'https://api.instagram.com/v1/tags/' + search + '/media/recent';
                _jquery2.default.ajax({
                    type: 'GET',
                    url: url,
                    data: {
                        client_id: _this.opts.client_id
                    },
                    dataType: 'jsonp'
                }).done(function (res) {
                    console.log(res);
                }).fail(function (err) {
                    console.log(err);
                });
            });
        }
        /**
         * Removes hashtag from the string
         */

    }, {
        key: '_clean',
        value: function _clean(str) {
            // remove spaces from strings
            str = str.replace(/ /g, '');

            // remove hashtag
            if (str.charAt(0) == "#" || str.charAt(0) == '&#35;') {
                str = str.substr(1);
            }

            return str;
        }
    }]);

    return IS;
}();

exports.default = IS;