import { Observer, Equals, ComponentStore } from 'builtjs'
import Server from './server'

export const Messages = {
    messages$: Observer([]),
    find: message => {
        const messages = Messages.messages
        let foundExisting = false
        let index = messages.length

        while (!foundExisting && index) {
            index = index - 1

            if (Equals(messages[index], message)) {
                foundExisting = true
            }
        }

        if (foundExisting) {
            return {
                index,
                messages
            }
        }

        return false
    },
    add: message => {
        const findResults = Messages.find(message)
        if (findResults) { return }

        const newMessages = Messages.messages.slice()
        newMessages.push(message)
        Messages.messages$.next(newMessages)

        return Messages.messages
    },
    remove: message => {
        const findResults = Messages.find(message)
        if (!findResults) { return }

        findResults.messages.splice(findResults.index, 1)
        Messages.messages$.next(findResults.messages)

        return Messages.messages
    },
    closeBtnString: `<button-element overlay-message-close class="nomargin">Close</button-element>`
}

Object.defineProperties(Messages, {
    messages: {
        get() { return Messages.messages$.value.slice() },
        set(message) {
            Messages.add(message)
        }
    }
})

Server.subscribe(`appError`, data => {
    Messages.add({
        header: `Error`,
        body: data.error,
        button: Messages.closeBtnString
    })
})

let maxWait = 1000
const waitForReadyState = el => {
    maxWait = maxWait - 1
    if (!maxWait) { return }

    if (!el.state.shown) {
        return requestAnimationFrame(() => waitForReadyState(el))
    }

    el.state.shown.subscribe(shown => {
        if (!shown && Messages.messages[0]) {
            Messages.remove(Messages.messages[0])
        }
    })
}

const waitForOverlayMessage = ComponentStore.watchForTag(`overlay-message`, el => {
    if (el && el.id === `app-messages`) {
        waitForOverlayMessage()
        waitForReadyState(el)
    }
})