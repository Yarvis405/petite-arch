/* 
Copyright Yarvis405, Inc. and other Node contributors. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/

"use strict"

//parch --> petite-vue architect

const parch = ({ title, props, template }) => {
  const component = {
    set props(obj) {
      Object.entries(obj).forEach(([key, value]) => {
        this[key] = value
      })
    },

    get template() {
      return typeof template === 'function'
        ? template(this)
        : template
    }
  }

  try {
    component.props = props
    console.debug('parch running')
    return component.template
  } catch (e) {
    console.error(`couldn't add component`, e)
  }
}

const parse = (value = "") => {
  return value
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/=/g, '&#61;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;')
    .replace(/\(/g, '&#40;')
    .replace(/\)/g, '&#41;')
}

/*
const title = parch({
  title: "print",
  props: {
    content: "hello world"
  },
  template: (props) => {
    return `
    <div>${props.content}</div>
  `
  }
})

parse(string)
*/
//script, eval

//export
module.exports = {
  parch,
  parse
}
