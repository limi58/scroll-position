function ScrollPos(className, opts = {}) {
  this.className = className
  this.offset = opts.offset || 0
  this.doms = Array.prototype.map.call(document.querySelectorAll(className), dom => dom)
  this.ids = this.doms.map(dom => dom.id).reverse()
  this.offsets = this.doms.map(dom => dom.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop).reverse()
}

ScrollPos.prototype = {
  start: function(cb) {
    this.cb = cb
    window.addEventListener('scroll', this.onScroll.bind(this))
  },

  onScroll(e) {
    let id
    const barTop = document.body.scrollTop || document.documentElement.scrollTop
    for (let i in this.offsets) {
      if (barTop >= this.offsets[i] + this.offset) {
        id = this.ids[i]
        break
      }
    }
    this.cb(id, barTop)
  },

  getOffsets() {
    return this.doms.map(dom => {
      return dom.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop
    })
  },
}
