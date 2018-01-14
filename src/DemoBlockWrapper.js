/**
 * @file demo
 * @author wangtianhua
 */
define(function (require, exports, module) {

    'use strict';

    return {
        template: require('tpl!./DemoBlockWrapper.html'),

        propTypes: {
            js: {
                type: 'string'
            },
            css: {
                type: 'string'
            },
            code: {
                type: 'string'
            }
        },

        data: function () {
            var me = this;
            return {

            }
        },

        methods: {
        },
        afterMount: function () {
            console.log(this.get('js'), this.get('css'), this.get('code'))
        },
        beforeDestroy: function () {

        }
    };

});
