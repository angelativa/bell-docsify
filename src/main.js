/**
 * @file 入口
 * @author wangtianhua
 */
define(function (require, exports, module) {

    'use strict';

    exports.init = function () {

        new Yox({
            el: '#app',
            template: require('tpl!./main.html'),

            data: {
                temp: {
                    js: 'https://raw.githubusercontent.com/angeltiva/bellUI/master/src/main.js',
                    css: 'https://raw.githubusercontent.com/angeltiva/bellUI/master/src/main.css',
                    code: '<Alert>An info prompt</Alert>'
                }
            },

            components: {
                DemoBlockWrapper: require('./DemoBlockWrapper')
            },

            afterMount: function () {

            }
        });
    }
})