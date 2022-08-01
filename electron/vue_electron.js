const electron = require('electron')

export default({
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $electron: {
                get() {
                    return electron
                },
            },
        })
    },
})
