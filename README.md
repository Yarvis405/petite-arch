# path

This is an exact copy of the NodeJS ’petite-arch’ module published to the NPM registry. 

[Documentation](http://nodejs.org/docs/latest/api/parch.html)

## Install

```sh
$ npm install --save petite-parch
```

# petite arch

- petite arch is a project derived from a petite-vue problem, meaning is a pretty simple add-on.

- although is the problem is based on petite-vue, it doesn't only work for petite-vue.


## Status

- This is have started as an experiment for a personal project. So we highly suggest the use of parse for inputs.
- Project is also Open Source so if anything that is needed it can be modified

## Usage

- How to use petite-arch

```js
import { parch } from 'petite-arch';

//parch({props, template})

const my_template = parch({
  props: {
    attr: "id='container' class='active'",
    content: {
      title: "hello world",
      paragraph: "im greeting in my title ;)"
    }
  },

  //template: `hello if no props is passed else -> template(props) {}`

  template(props){
    //it is recommended to use the backtick or concatenate
    return `
      <div ${props.attr} >
        <h2>${props.content.title}</h2>
        <p>${props.content.paragraph}</p>
      </div>
    `
  }
})
```

- for inputs in forms or applications you might want to use the parse utility.

```js
//in this example we import petite vue so you can see an example
//file -> main.js

import {createApp} from 'petite-vue';
import {parch, parse } from 'petite-arch';

const templates = parch({
  props: {
    title: "",
    letter: ""
  },
  template(props){
    return `
      <form>
        <h2>${props.title}</h2>
        <input v-model=${props.letter}>
      </form>

      <div>
        <p>${parse(props.letter)}</p>
      <div>
    `
  }
})

const app = props => {
  return {
    title: props.title,
    letter: props.letter,
    //$template -> is not used because its a loaded template and is kind of like static so instead el.innerHTML is used
    
    mounted(){
      el.innerHTML = my_template
    }
  }
}
```
- in the example above we use this line: 
```html 
<p>${parse(props.letter)}</p>
```
parse is the built-in input filter for petite-arch/parch <-- name was taken

```html
<!--html file-->
<div v-scope="app({title: 'my letter'})"></div>
```


## Security and CSP
- in Order to avoid possible XSS attacks, use the parse utility

- in case of you having a backend, we recommend  the use of filters pipes or guards as well

## sources
- [Chat GPT](https://chatgpt.com/share/6840dc56cb14-800a-bcd5-02aca3edb8be)
- [Node Template](https://github.com/jinder)
- [Readme Template](https://github.com/vuejs/petite-vue)

## License

MIT
