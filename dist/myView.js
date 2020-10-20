(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.function.name'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.function.name', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.myView = factory(null, global.Vue));
}(this, (function (es_function_name, vue) { 'use strict';

  var script = {
    name: 'TestCom',
    mounted: function mounted() {
      console.log(123);
    }
  };

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-0f72a62a");

  vue.pushScopeId("data-v-0f72a62a");
  const _hoisted_1 = { class: "home" };
  vue.popScopeId();

  const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1, "TestCom123"))
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".home[data-v-0f72a62a] {\n  background: red;\n}\n";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-0f72a62a";
  script.__file = "src/test.vue";

  function index (Vue) {
    Vue.component(script.name, script);
  }

  return index;

})));
