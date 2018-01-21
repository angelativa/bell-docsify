import DemoBlock from './DemoBlock'
Yox.component({
    DemoBlock
});
let hashMap = {};
export let demoCreate = function (code) {
    window.addEventListener(
        'hashchange',
        function () {
            setTimeout(function () {
                var map = hashMap[location.hash];
                if (map) {
                    for (var i = 0; i < map.length; i++) {
                        new Yox(map[i]);
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
                    var create = function (number, code) {
                        setTimeout(
                            function () {
                                if (!hashMap[location.hash]) {
                                    hashMap[location.hash] = [];
                                }
                                var str = {
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
                                };
                                new Yox(str);
                                hashMap[location.hash].push(str);
                            },
                            500
                        );
                    }
                    var a = create(id, code);
                    return '<div id="demo' + id + '"></div>';
                }
            }
        };
    };
};

window.demoCreate = demoCreate;