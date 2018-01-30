'use strict'

function call () {
    let u = (new Error()).stack.split('\n')[2].
            replace(/^\s+at\s+(.+?)\s.+/g, '$1' )
    console.log(u)
    return u
}

function named () {
    call()
}

named()
