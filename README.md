# scroll-position
simple scroll position lib for js

# install

suport umd

`npm install --save simple-scroll-position`

or

`<script src="../dist/scroll.min.js" charset="utf-8"></script>`

# usage

[example](example)

```html
<div class="box" id="box1">i am box1</div>
<div class="box" id="box2">i am box2</div>
<div class="box" id="box3">i am box3</div>
<div class="box" id="box4">i am box4</div>
```

```js
const ScrollPos = require('simple-scroll-position')
const scroll = new ScrollPos('.box', { offset: -100 })
scroll.start(function(id, barTop) {
  console.log(id, barTop)
})
```
