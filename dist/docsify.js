(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['Bell-docs'] = {})));
}(this, (function (exports) { 'use strict';

  var DemoBlock = {

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

      <div class="bell-docsify-header">
        <span class="bell-docsify-button bell-docsify-text" on-click="goJsfiddle()">
          Jsfiddle
        </span>
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
        type: 'number'
      }
    },

    data () {
      return {
        source: '',
        sourceCode: '',
        isOpen: false,
        isViewFullBlock: false,
        height: 250
      }
    },

    methods: {
      formatCode (code) {

        let codeStr = code.replace(/export\s*default/g, '').trim();
        let codeFnc = new Function('return ' + codeStr)();

        this.set({
          isViewFullBlock: codeFnc.isViewFullBlock,
          height: codeFnc.height
        });

        return codeFnc
      },
      open () {
        let me = this;
        let viewHeight = me.get('isViewFullBlock') ? me.$refs.docsifyView.children[ 0 ].clientHeight : 0;
        let height = me.$refs.docsifySource.clientHeight + viewHeight + 60;
        me.$el.style.height = height <= 60 ? '250px' : `${height}px`;
        me.set('isOpen', true);
      },
      close () {
        this.$el.style.height = `${this.get('height') || 250}px`;
        this.set('isOpen', false);
      },
      goJsfiddle () {
        var jsResources = `<script src="https://unpkg.com/yox@1.0.0-alpha.17/dist/standard/dev/yox.js"></script>`;
        const data = {
          js: '',
          css: [ '' ],
          html: `${jsResources}\n<div id="app"></div>${this.get('sourceCode')}`,
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
          node.value = data[ name ].toString();
          form.appendChild(node.cloneNode());
        }
        form.setAttribute('id', 'fiddle-form');
        form.style.display = 'none';
        document.body.appendChild(form);
        form.submit();
      }
    },

    afterMount () {
      let me = this;
      let html = me.formatCode(me.get('code'));
      let code = me.get('code').replace(/height\:\s+[0-9]+\,+\s+/, '');
      code = code.replace(/isViewFullBlock\:\s+[a-z]+\,+\s+/, '');
      let source = hljs.highlight('js', code);
      me.set({
        source: source.value,
        sourceCode: html
      });
      html.el = '.bell-docsify-view-' + me.get('number');
      new Yox(html);
      
      me.open();
      Yox.nextTick(function () {
        me.close();
      });
    }
  };

  Yox.component({
    DemoBlock
  });
  let hashMap = {};
  let demoCreate = function (code) {

    window.addEventListener(
      'hashchange',
      function () {
        setTimeout(function () {
          let map = hashMap[location.hash];
          if (map) {
            for (let i = 0; i < map.length; i++) {
              new Yox(map[ i ]);
            }
          }
        }, 500);
      }
    );

    return function (hook, vm) {
      let id = 0;
      window.$docsify.markdown = {
        renderer: {
          code: function (code, lang) {
            id++;
            let create = function (number, code) {
              setTimeout(
                function () {
                  if (!hashMap[location.hash]) {
                    hashMap[location.hash] = [];
                  }
                  let str = {
                    el: '#demo' + number,
                    template: `
                    <div class="bell-docsify-demo-wrapper">
                      <DemoBlock code="{{code}}" number="{{number}}" />
                    </div>
                  `,

                    replace: true,

                    data: function () {
                      return {
                        code: code,
                        number: number
                      }
                    }
                  };
                  new Yox(str);
                  hashMap[location.hash].push(str);
                },
                500
              );
            };
            let a = create(id, code);
            return '<div id="demo' + id + '"></div>';
          }
        }
      };
    };
  };

  window.demoCreate = demoCreate;

  exports.demoCreate = demoCreate;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
