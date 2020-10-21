import Test from './components/Test/index'
import MainContainer from './components/MainContainer/index'

export default {
  install(Vue) {
    Test(Vue)
    MainContainer(Vue)
  },
  Test: {
    install(Vue) {
      Test(Vue)
    }
  },
  MainContainer: {
    install(Vue) {
      MainContainer(Vue)
    }
  }
}
