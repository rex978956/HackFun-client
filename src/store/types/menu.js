import Vue, { VueConstructor } from 'vue'

export interface MenuState {
  menu: MenuItem[]
}

export interface MenuItem {
  name: string
  path: string
  redirect?: string
  component?: VueConstructor<Vue>
  children?: MenuItem[]
  meta: {
    index?: number
    label?: string
    menuItem: boolean
  }
}
