import type { App, Component } from 'vue'

export type Install = {
  install: (app: App) => void
}

export function toInstall <T extends Component> (option: T, ...components: Component[]): T & Install {
  (option as Install).install = function (app: App) {
    for (const component of components) {
      app.component((component as any).__name as string, component)
    }
  }
  return option as T & Install
}
