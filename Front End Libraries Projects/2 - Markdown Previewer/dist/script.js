const projectName = 'simple-markdown-previewer'
localStorage.setItem('example_project', 'Simple-Markdown Previewer')

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
})

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer()
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: placeholder,
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value,
    })
  }

  clear() {
    this.setState({
      markdown: '',
    })
  }

  reset() {
    this.setState({
      markdown: placeholder,
    })
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'title' },
        ' Simple Markdown Previewer  ',
        React.createElement(
          'button',
          { id: 'clear-btn', onClick: () => this.clear() },
          React.createElement('i', {
            className: 'fa fa-times-circle',
          }),
          'clear'
        ),
        ' ',
        React.createElement(
          'button',
          { id: 'reset-btn', onClick: () => this.reset() },
          React.createElement('i', { className: 'fa fa-sync' }),
          'reset'
        ),
        ' ',
        React.createElement(
          'button',
          null,
          React.createElement(
            'a',
            { href: 'https://daringfireball.net/projects/markdown/syntax' },
            ' ',
            React.createElement('i', {
              className: 'fa fa-info-circle',
            }),
            'info '
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'wrapper' },
        React.createElement(
          'div',
          { className: 'editorWrap' },
          React.createElement(
            'div',
            { className: 'editorTitle' },
            ' ',
            React.createElement('i', {
              className: 'fa fa-pencil-alt',
            }),
            ' Markdown Editor'
          ),
          React.createElement(Editor, {
            markdown: this.state.markdown,
            onChange: this.handleChange,
          })
        ),

        React.createElement(
          'div',
          { className: 'previewWrap' },
          React.createElement(
            'div',
            { className: 'previewTitle' },
            ' ',
            React.createElement('i', {
              className: 'fa fa-globe',
            }),
            ' Browser Previewer'
          ),
          React.createElement(Preview, { markdown: this.state.markdown })
        )
      )
    )
  }
}
const Editor = (props) => {
  return React.createElement('textarea', {
    id: 'editor',
    value: props.markdown,
    onChange: props.onChange,
    type: 'text',
  })
}

const Preview = (props) => {
  return React.createElement('div', {
    id: 'preview',
    dangerouslySetInnerHTML: {
      __html: marked(props.markdown, { renderer: renderer }),
    },
  })
}

const placeholder = `
# Writing in Markdown Quick Tutorial

## This is a Heading h2
### This is a Heading h3 

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

## Images

![This is a alt text.](https://sun9-56.userapi.com/wFyl6sPkxk3_4A-XmxugJ_6tA3cxtEJlE3pVGg/vq4FFm2fHl8.jpg "This is a sample image.")

## Links

Author: [MasterGrimm](https://codepen.io/Master_Grimm/full/qBdqEmj).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Code

Some inline code, \`<div> test </div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function test(firstLine, lastLine) {
  if (firstLine == '\`\`\`' 
   && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

## Table

№ | Header-1 | Header-2
------------ | ------------- | ------------- 
1 | item-1 | item-2
2 | item-3 | item-4

## This concludes the Tutorial
`
ReactDOM.render(React.createElement(App, null), document.getElementById('app'))

// texterea size depend on content
var textarea = document.querySelector('textarea')

textarea.addEventListener('keyup', function () {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + 'px'
  }
})
