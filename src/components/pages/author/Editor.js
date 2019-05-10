import React,{Component} from 'react';
import './Editor.css'
import ReactQuill from 'react-quill'; // ES6

export default class Editor extends Component {
  constructor (props) {
    super(props)
    this.state = { text: '', theme: 'snow', description:'', background:'', title:''}
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (html) {
  	this.setState({ text: html });
  }
  
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }

  onSubmit(evt){
    evt.preventDefault()
    const {title, background,description,text}= this.state
    this.props.addArticle(text, title, description)
  }
  
  render () {
    const {name, title, background,description}= this.state
    return (
      <div style={{width:`80%`, margin: '0 auto'}}>
        <h3>NEW ARTICLE</h3>
        <form>
          <div className="form-group">
              <label htmlFor="exampleInputPassword1">Title</label>
              <input type="text" className="form-control" placeholder="Title's article" 
                     value={title}
                     onChange={evt=>{this.setState({title: evt.target.value})}}/>
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" 
                     value={description}
                     onChange={evt=>{this.setState({description: evt.target.value})}}/>
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputPassword1">Background</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="URL's background" 
                       value={background}
                       onChange={evt=>{this.setState({name: evt.target.background})}}/>
          </div>
       
          <div className="form-group">
          <label htmlFor="exampleInputPassword1">Content</label>
        <ReactQuill 
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.text}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
         />
        {/* <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => 
              this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div> */}
        </div>
         <button type="submit" className="btn btn-primary" onClick={(evt)=>this.onSubmit(evt)}>Submit</button>
        </form>
       </div>
     )
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

