import Test from './components/Test/Test.vue'
import MainContainer from './components/MainContainer/MainContainer.vue'

export default function (Vue) {
  Vue.component(Test.name, Test)
  Vue.component(MainContainer.name, MainContainer)
}
