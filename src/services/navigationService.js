import router from "@/router"

/**
 * Redirection avec le router
 * @param {*} path chemin cible
 */
const redirect = path => {
    if (window.location.pathname != path) {
        router.push(path)
    }
}

export default {
    goToPage () {
        redirect("/page")
    },
    goHome () {
        redirect("/administration")
    }
}