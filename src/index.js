import DemoBlock from './DemoBlock'
Yox.component({
    DemoBlock
});

export let demoCreate = function (code) {
    return function (hook, vm) {
        let id = 0;
        window.$docsify.markdown = {
            renderer: {
                code: function (code, lang) {
                    id++;
                    var create = function (number, code) {
                        setTimeout(
                            function () {
                                new Yox({
                                    el: '#demo' + number,
                                    template: `
                                        <div class="bell-demo-wrapper">
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
                                });
                            },
                            500
                        );
                    }
                    create(id, code);
                    return '<div id="demo' + id + '"></div>';
                }
            }
        };
    };
};

window.demoCreate = demoCreate;