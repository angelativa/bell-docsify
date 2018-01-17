/**
 * @file demo
 * @author wangtianhua
 */

export default {

    template: `
<div class="bell-view-box">

    <div class="bell-header">
        <span class="bell-button bell-text" on-click="goJsfiddle()">
            Jsfiddle
        </span>
    </div>

    <div class="bell-view bell-view-{{number}}">

    </div>

    <div class="bell-source">
        <pre>
            <code class="html hljs xml">
                {{{source}}}
            </code>
        </pre>
    </div>

    {{#if isOpen}}
        <i class="bell-icon bell-view-box-icon bell-icon-ios-arrow-up" on-click="close()"></i>
    {{else}}
        <i class="bell-icon bell-view-box-icon bell-icon-ios-arrow-down" on-click="open()"></i>
    {{/if}}
</div>
    `,

    propTypes: {
        code: {
            type: 'string'
        },
        number: {
            type: ['string', 'number']
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
        formatCode: function (code) {
            code = code.replace(/<\/?script>/g, '').trim();
            code = code.replace(/export\s*default/g, '').trim();
            code = new Function('return ' + code)();
            return code;
        },
        open: function () {
            var me = this;
            var container = me.$el;
            container.style.maxHeight = container.getElementsByTagName('pre')[0].clientHeight;

            me.set({
                isOpen: true
            });
        },
        close: function () {
            var me = this;
            me.$el.style.maxHeight = '250px';

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
        var html = me.formatCode(code);
        html.el = '.bell-view-' + me.get('number');
        new Yox(html);
    }
}