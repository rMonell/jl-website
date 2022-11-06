export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject("locomotive", {
    activeScroll: null,
    initCallbacks: [],
    onInit (callBack) {
      this.initCallbacks.push(callBack)
    },
    async init (el) {
      const LocomotiveScroll = await (await import("locomotive-scroll")).default
      this.activeScroll = new LocomotiveScroll({
        el,
        smooth: true,
      })
      this.initCallbacks.forEach(callback => callback(this.activeScroll))
    },
  })
}