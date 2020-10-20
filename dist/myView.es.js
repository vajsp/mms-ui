import 'core-js/modules/es.function.name';
import { pushScopeId, popScopeId, openBlock, createBlock, withScopeId } from 'vue';

var script = {
  name: 'TestCom',
  mounted: function mounted() {
    console.log(123);
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-0f72a62a");

pushScopeId("data-v-0f72a62a");
const _hoisted_1 = { class: "home" };
popScopeId();

const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, "123"))
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
  Vue.component(script.name, Test);
}

export default index;
