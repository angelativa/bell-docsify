/**
 * @file demo
 * @author wangtianhua
 */
define(function (require, exports, module) {

    'use strict';

    function formatCode(code) {
        code = code.replace(/<\/?script>/g, '').trim();
        code = code.replace(/export\s*default/g, '').trim();
        code = new Function('return ' + code)();
        code.el = '.bell-view';
        return code;
    }

    return {
        template: require('tpl!./DemoBlockWrapper.html'),

        propTypes: {
            jsResources: {
                type: 'string'
            },
            cssResources: {
                type: 'string'
            },
            code: {
                type: 'string'
            }
        },

        data: function () {
            var me = this;
            return {
                source: '',
                isOpen: false
            }
        },

        methods: {
            open: function () {
                var me = this;
                var container = $(me.$el);
                container.css('maxHeight', container.find('pre').height() + 40 + 'px');

                me.set({
                    isOpen: true
                });
            },
            close: function () {
                var me = this;
                $(me.$el).css('maxHeight', '250px');
                me.set({
                    isOpen: false
                });
            },
            goJsfiddle: function () {
                var me = this;
                var script = '';
                var html = '';
                var style = ['12'];
                var jsTpl = me.get('code');

                const data = {
                  js: jsTpl,
                  css: style,
                  html: html,
                  panel_js: 3,
                  panel_css: 1
                };

                const form = document.getElementById('fiddle-form') || document.createElement('form');
                form.innerHTML = '';
                const node = document.createElement('textarea');

                form.method = 'post';
                form.action = 'https://jsfiddle.net/api/post/library/pure/';
                form.target = '_blank';

                for (let name in data) {
                  node.name = name;
                  node.value = data[name].toString();
                  form.appendChild(node.cloneNode());
                }
                form.setAttribute('id', 'fiddle-form');
                form.style.display = 'none';
                document.body.appendChild(form);

                form.submit();
            }
        },
        afterMount: function () {
            var me = this;
            var code = me.get('code');
            var source = hljs.highlight('html', code);

            me.set({
                source: source.value
            });

            new Yox(formatCode(code));
        },
        beforeDestroy: function () {

        }
    };

});
