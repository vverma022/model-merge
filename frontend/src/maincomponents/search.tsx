import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { SelectModel } from "./selectmodel";
import React, { useState } from "react";
import axios from "axios";
import { SelectType } from "./selecttype";

interface SearchProps {
  SetResponse: (response: string) => void;
}

const Search = ({ SetResponse }: SearchProps) => {
  const [Prompt, SetPrompt] = useState("");
  const [SelectedModel, SetSelectedModel] = useState("");
  const [SelectedType, SetSelectedType] = useState("");
  const [ShowType, SetShowType] = useState(false);

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Prompt) {
      alert("Please select a model and enter a prompt");
      return;
    }
    let endpoint = "http://localhost:6030/api/chat";
    if (SelectedModel === "Command-R-Plus") {
      endpoint = "http://localhost:6030/api4/chat";
    } else if (SelectedModel === "Claude 3.5 Sonnet") {
      endpoint = "http://localhost:6030/api5/chat";
    }
    try {
      const response = await axios.post(endpoint, {
        message: Prompt,
        model:
          SelectedModel === "Mistral"
            ? "mixtral-8x7b-32768"
            : SelectedModel === "llama-3"
            ? "llama3-70b-8192"
            : SelectedModel === "Command-R-Plus"
            ? "command-r"
            : SelectedModel === "Claude 3.5 Sonnet"
            ? "claude-3-5-sonnet-20240620"
            : ""

      });
      console.log(response.data.response);
      SetResponse(response.data.response);
    } catch (error) {
      console.error("Error sending request to the server");
    }
  };
  
  const handleModelChange = (model: string) => {
    SetSelectedModel(model);
    SetShowType(model === "SDXL 1.0");
  };

  return (
    <div className="flex w-full flex-row p-2">
      <form onSubmit={handleSubmit} className="flex w-full">
        <div>
          <SelectModel onChange={handleModelChange}  />
        </div>
        <div className="flex w-full px-1">
          <Input
            type="text"
            placeholder="Prompt"
            value={Prompt}
            onChange={(e) => SetPrompt(e.target.value)}
          />
        </div>
        {ShowType && (
          <div>
            <SelectType onChange={SetSelectedType} />
          </div>
        )}
        <div className="px-1">
          <Button
            type="submit"
            className="w-28 bg-red-600 hover:bg-red-400 text-white"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
