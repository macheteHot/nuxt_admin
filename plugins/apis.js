import cApi from '@/util/http'
import Vue from 'vue'

const apis = {
  test:cApi('test')
}


Vue.prototype.$apis = apis