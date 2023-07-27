import { App } from 'vue'
import components from './components'

export default {
  install (app: App) {
    components.install(app)
  }
}