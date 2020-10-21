import Test from './components/Test/index'
import MainContainer from './components/MainContainer/index'
import CountTo from './components/CountTo/index'
import CountUp from './components/CountUp/index'

export default {
  install(Vue) {
    Test(Vue)
    MainContainer(Vue)
    CountTo(Vue)
    CountUp(Vue)
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
  },
  CountUp: {
    install(Vue) {
      CountUp(Vue)
    }
  }
}
