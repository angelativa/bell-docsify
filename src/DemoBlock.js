/**
 * @file demo
 * @author wangtianhua
 */

// <div class="bell-docsify-header">
//     <span class="bell-docsify-button bell-docsify-text" on-click="goJsfiddle()">
//         Jsfiddle
//     </span>
// </div>

export default {

    template: `
        <div class="bell-docsify-view-box
        {{#if isViewFullBlock}} bell-view-full-block{{/if}}
        {{#if isOpen}} bell-box-open{{/if}}">

            <div ref="docsifyView" class="bell-docsify-view bell-docsify-view-{{number}}">
            </div>

            <div class="bell-docsify-source">
                <pre ref="docsifySource">
                    <code class="html hljs xml">
                        {{{source}}}
                    </code>
                </pre>
            </div>

            {{#if isOpen}}
                <i class="bell-icon bell-docsify-view-box-icon bell-icon-ios-arrow-up" on-click="close()"></i>
            {{else}}
                <i class="bell-icon bell-docsify-view-box-icon bell-icon-ios-arrow-down" on-click="open()"></i>
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
            isOpen: false,
            isViewFullBlock: false
        }
    },

    methods: {
        formatCode: function (code) {
            var me = this;
            code = code.replace(/export\s*default/g, '').trim();
            code = new Function('return ' + code)();
            me.set({
                isViewFullBlock: code.isViewFullBlock
            });
            return code;
        },
        open: function () {
            var me = this;
            var container = me.$el;
            var height;
            var sourceHeight = me.$refs.docsifySource.clientHeight;
            var viewHeight = 0;
            if (me.get('isViewFullBlock')) {
                viewHeight = me.$refs.docsifyView.children[0].clientHeight;
            }
            height = sourceHeight + viewHeight + 60;
            container.style.maxHeight = height + 'px';

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
        var source = hljs.highlight('js', code);

        me.set({
            source: source.value
        });
        var html = me.formatCode(code);
        html.el = '.bell-docsify-view-' + me.get('number');
        new Yox(html);

        me.open();
        Yox.nextTick(function () {
            me.close();
        });
    }
}