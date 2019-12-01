import { ComponentStore, AppendStyleElement } from 'builtjs'
import vars from '../styles/vars.scss'

const bodyStyle = require(`../styles/style.scss`).toString()
const buttonStyles = require(`../styles/button-element.scss`).toString()
const inputStyles = require(`../styles/input-field.scss`).toString()
const progressBarStyles = require(`../styles/progress-bar.scss`).toString()

const Theme = () => {
    AppendStyleElement(bodyStyle, document.head, `body-style`)
    ComponentStore.addTheme(`button-element`, { theme: buttonStyles })
    ComponentStore.addTheme(`input-field`, {
        theme: inputStyles,
        accentcolor: vars.locals.primary
    })
    ComponentStore.addTheme(`progress-bar`, {
        theme: progressBarStyles,
        color: vars.locals.primary
    })
}

export default Theme