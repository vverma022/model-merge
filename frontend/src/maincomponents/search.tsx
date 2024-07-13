
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { SelectModel } from './selectmodel'
import React, { useState } from 'react'
import axios from 'axios'
import { stat } from 'fs'



const Search = () => {
  const [Prompt,SetPrompt] = useState("");
  const [SelectedModel,SetSelectedModel] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!SelectedModel || !Prompt) {
      alert("Please select a model and enter a prompt");
      return;
    }
    try{
      const response = await axios.post("http://localhost:6000/api/chat",{
        model: SelectedModel,
        prompt: Prompt
      });
      console.log(response.data);
    }catch(error){
        console.error("Error sneding request to the server",(error as any).response.status);
    }
  };

  return (
    <div className="flex w-full flex-row p-2">
      <form onSubmit={handleSubmit} className='flex'>
      <div>
      <SelectModel onChange={SetSelectedModel}  />
      </div>
      <div className='w-full px-1'>
      <Input type="text" placeholder="Prompt" value={Prompt} onChange={(e) => SetPrompt(e.target.value)}/>
      </div>
      <div>
      <Button type="submit"  className='w-28 bg-red-600 hover:bg-red-400 text-white'>
        Send
      </Button>
      </div>
      </form>
    </div>
    )
  }

export default Search;