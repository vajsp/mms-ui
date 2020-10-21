import Test from './components/Test/index'
import MainContainer from './components/MainContainer/index'
import CountTo from './components/CountTo/index'

export default {
  install(Vue) {
    Test(Vue)
    MainContainer(Vue)
    CountTo(Vue)
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
  },
  CountTo: {
    install(Vue) {
      CountTo(Vue)
    }
  }
}
