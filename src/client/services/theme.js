import { ComponentStore, AppendStyleElement } from 'builtjs'
import vars from '../styles/vars.scss'

const bodyStyle = require(`../styles/style.scss`).toString()
const buttonStyles = require(`../styles/button-element.scss`).toString()
const inputStyles = require(`../styles/input-field.scss`).toString()
const progressBarStyles = require(`../styles/progress-bar.scss`).toString()
const contentCollapseStyles = require(`../styles/content-collapse.scss`).toString()
const spinnerElementStyles = require(`../styles/spinner-element.scss`).toString()

const Theme = () => {
    AppendStyleElement(bodyStyle, document.head, `body-style`)
    ComponentStore.addTheme(`button-element`, { theme: buttonStyles })
    ComponentStore.addTheme(`content-collapse`, { theme: contentCollapseStyles })
    ComponentStore.addTheme(`spinner-element`, { theme: spinnerElementStyles })
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