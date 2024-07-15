import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { SelectModel } from './selectmodel'
import React, { useState } from 'react'
import axios from 'axios'

interface SearchProps {
  SetResponse: (response: string) => void;
}

const Search = ({SetResponse}: SearchProps) => {
  const [Prompt,SetPrompt] = useState("");
  const [SelectedModel,SetSelectedModel] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!Prompt) {
      alert("Please select a model and enter a prompt");
      return;
    }
    let endpoint = "http://localhost:6030/api/chat";
    if(SelectedModel === "Command-R-Plus"){
      endpoint = "http://localhost:6030/api4/chat";
    }
      try{
        const response = await axios.post(endpoint,{
          message: Prompt,
          model: SelectedModel === "Mistral" ? "mixtral-8x7b-32768" : SelectedModel === "llama-3" ? "llama3-70b-8192" : SelectedModel === "Command-R-Plus" ? "command-r" : ""
        });
        console.log(response.data.message);
        SetResponse(response.data.response);
      }catch(error){
          console.error("Error sending request to the server");
      }
  };

  return (
    <div className="flex w-full flex-row p-2">
      <form onSubmit={handleSubmit} className='flex w-full'>
        <div>
          <SelectModel onChange={SetSelectedModel}  />
        </div>
        <div className='flex w-full px-1'>
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