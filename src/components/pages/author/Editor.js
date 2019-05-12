import React,{Component} from 'react';
import './Editor.css'
import ReactQuill from 'react-quill'; // ES6

export default class Editor extends Component {
  constructor (props) {
    super(props)
    this.state = { text: '', theme: 'snow', description:'', feature_img:'', title:''}
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
    const {title, feature_img,description,text}= this.state
    this.props.addArticle(text, title,description,feature_img)
  }
  
  render () {
    const { title,feature_img,description}= this.state
    return (
      <form className="form-style-9">
      <ul>
        <li>
          <input type="text" name="field1" className="field-style field-split align-left" placeholder="Title" 
            value={title}
            onChange={evt=>{this.setState({title: evt.target.value})}}/>
          <input type="email" name="field2" className="field-style field-split align-right" placeholder="URL image" 
            value={feature_img}
            onChange={evt=>{this.setState({feature_img: evt.target.value})}}/>
        </li>
        <li>
          <input type="text" name="field3" className="field-style field-full align-none" placeholder="Description" 
            value={description}
            onChange={evt=>{this.setState({description: evt.target.value})}}/>
        </li>
        <li>
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
        </li>
      </ul>
      <button type="submit" className="btn btn-primary" onClick={(evt)=>this.onSubmit(evt)}>Submit</button>
    </form>
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

