import React from 'react'
import { ModelCards } from '../maincomponents/modelcards'
import Header from '../maincomponents/header'

const Models = () => {

  return (
    <>
    <Header />
    <div className='flex justify-center'>
        <h1 className='text-3xl font-semibold p-4'>About the Models</h1>
    </div>
    <div className='grid gap-4 grid-cols-3 grid-rows-3 p-4'>
        <ModelCards Company='Meta' CardT='LLAMA-3' CardD="Meta Llama 3 is a large language model (LLM) developed by Meta that's trained on a massive amount of text data.
This allows it to understand and respond to language in a comprehensive way, making it suitable for tasks like writing different kinds of creative content, translating languages, and answering your questions in an informative way."/>
        <ModelCards Company='Meta' CardT='Mistral' CardD='Mistral Small is a highly efficient large language model optimized for high-volume, low-latency language-based tasks. It provides outstanding performance at a cost-effective price point. Key features of Mistral Small include RAG specialization, coding proficiency, and multilingual capabilities.'/>
        <ModelCards Company='Cohere' CardT='Command-R-Plus' CardD='Command R+ is an instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models like command-r. It is best suited for complex RAG workflows and multi-step tool use.' />
        <ModelCards Company='StabilityAI' CardT='Stable Diffusion-XL' CardD="Stable Diffusion is a deep learning model that generates high-quality images from text descriptions through an iterative denoising process. It is widely used in creative applications, enabling artists and developers to produce detailed visuals from textual prompts."/>
        <ModelCards Company='Anthropic' CardT='Claude-3-Sonnet' CardD="Claude-3-Sonnet is a language model developed by Anthropic. It specializes in generating sonnets, a form of poetry consisting of 14 lines with a specific rhyme scheme. It can create beautiful and expressive sonnets based on given prompts or themes, making it a valuable tool for poets and writers."/>
    </div>
    </>
  )
}

export default Models