window.onNuxtReady(() => {
    console.log("process.env.STATIC", process.env.STATIC)
    console.log("process.env.EXPANDED", process.env.EXPANDED)
    console.log("process.env.NUXT_ENV_CUSTOM_STATIC", process.env.NUXT_ENV_CUSTOM_STATIC)
    console.log("process.env.NUXT_ENV_CUSTOM_EXPANDED", process.env.NUXT_ENV_CUSTOM_EXPANDED)
    console.log("process.env.TEST_VAR", process.env.TEST_VAR)
})