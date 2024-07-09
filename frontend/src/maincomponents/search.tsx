
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { SelectModel } from './selectmodel'
import { useState } from 'react'


const Search = () => {
  const [model,setModel] = useState('');
  const [prompt,setPrompt] = useState('');
  const [response,setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:6000/api/chat',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({model,prompt}),
      });
      const data = await res.json();
      setResponse(data.output_text);
  }catch(error){
    console.log(error);
    setResponse('An error occured while processing the request');
  }
}

const handlePromptChange = (e) => {
  setPrompt(e.target.value);
}

const handleModelChange = (e) => {
  setModel(e.target.value);
}

  return (
    <div className="flex w-full flex-row p-2">
      <div>
      <SelectModel onModelChange={handleModelChange} />
      </div>
      <div className='w-full px-1'>
      <Input type="text" placeholder="Prompt" value={prompt} onChange={handlePromptChange} />
      </div>
      <div>
      <Button type="submit" onClick={handleSubmit} className='w-28 bg-red-600 hover:bg-red-400 text-white'>
        Send
      </Button>
      </div>
    </div>
    )
  }

export default Search;