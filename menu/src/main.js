import { mount } from 'svelte'
import './app.module.scss'
import './global.scss'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
