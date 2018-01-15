/**
 * @file 入口
 * @author wangtianhua
 */
define(function (require, exports, module) {

    'use strict';

    exports.init = function (data) {

        new Yox({
            el: '#app',
            template: require('tpl!./main.html'),
            replace: true,
            data: function () {
                return {
                    style: require('tpl!./main.css'),
                    temp: {
                        jsResources: './dep/main.js',
                        cssResources: './dep/main.css',
                        code: `
<script>
    export default {
        template: \`
            <div>
                <Alert>An info prompt</Alert>
                <Alert type="success">A success prompt</Alert>
                <Alert type="warning">A warning prompt</Alert>
                <Alert type="error">An error prompt</Alert>

                <style>
                    {{style}}
                </style>
            </div>
        \`,
        data: {
            style: '.bell-alert{ margin: 10px; }'
        }
    }
</script>`
                    }
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