# ModelMerge

Model Merge is an open-source platform that consolidates multiple language models into one place, allowing users to send requests to various models seamlessly from a single interface.

## Features

- Access multiple language models from one platform
- Seamlessly switch between different models
- Easy-to-use interface

## Tech Stack

**Client:** React, Shadcn, Tailwind

**Server:** Node, Express, Postgres, Prisma-ORM

## Screenshots

https://github.com/vverma022/model-merge/assets/109036913/50a1de4c-2d16-4791-badc-09cafcb3ebc5

## Installation

Before you begin, ensure you have the following,

    •	Node.js installed on your machine
    •	API keys from the following services:
    •	Gemini from https://ai.google.dev/gemini-api/docs/api-key
    •	Cohere from https://docs.cohere.com/
    •	Groq from https://console.groq.com/keys
    •	AIMLapi from https://aimlapi.com/app/sign-up/

## Run Locally

Clone the project

```bash
  git clone https://github.com/vverma022/model-merge.git
```

Go to the backend

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Create a new .env file

If in Linux environment:

```
touch .env
```

Start the server

```bash
  npm run start
```

Go to the frontend

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to the .env file in `backend` dir

`GEMINI_API_KEY`

`COHERE_API_KEY`

`AI_ML_API_KEY`

`LLAMA_API_KEY`

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Roadmap

- Add Additonal Models

- Add Langchain Support

- Dockerize the Models to Servers

- Create a Community
# Contributing to Transcriptase
We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github
We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests
Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](https://github.com/briandk/transcriptase-atom/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](); it's that easy!

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People *love* thorough bug reports. I'm not even kidding.

## License
By contributing, you agree that your contributions will be licensed under its MIT License.

## Support

For support, email vermausav018@gmail.com.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
