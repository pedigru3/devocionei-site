'use client'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface TextEditorProps {
  value: string
  onChange: (value: string) => void
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean']
    ]
  }

  return (
    //placeholder white
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      className='min-h-[200px]'
    />
  )
}

export default TextEditor 