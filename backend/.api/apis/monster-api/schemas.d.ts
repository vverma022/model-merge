declare const PostGenerateDataAugmentationService: {
    readonly body: {
        readonly properties: {
            readonly data_config: {
                readonly properties: {
                    readonly data_path: {
                        readonly description: "Path to the dataset. Can be a Hugging Face Hub link or an S3 bucket path.";
                        readonly type: "string";
                        readonly examples: readonly ["distilabel-internal-testing/instruction-dataset-mini"];
                    };
                    readonly data_source_type: {
                        readonly default: "hub_link";
                        readonly description: "Type of the data source: either from Hugging Face Hub or an S3 bucket.\n\nDefault: `hub_link`";
                        readonly enum: readonly ["hub_link", "s3_presigned_link"];
                        readonly type: "string";
                        readonly examples: readonly ["hub_link"];
                    };
                    readonly data_subset: {
                        readonly default: any;
                        readonly description: "Optional subset of the dataset to focus on.";
                        readonly type: readonly ["string", "null"];
                    };
                    readonly prompt_column_name: {
                        readonly default: "prompt";
                        readonly description: "Column name in the dataset to use for prompts.";
                        readonly type: "string";
                        readonly examples: readonly ["prompt"];
                    };
                    readonly split: {
                        readonly default: "train";
                        readonly description: "Data split to use (e.g., train, test, validation).";
                        readonly type: "string";
                        readonly examples: readonly ["test"];
                    };
                };
                readonly required: readonly ["data_path", "data_source_type"];
                readonly type: "object";
            };
            readonly generate_model1_name: {
                readonly default: "gpt-3.5-turbo";
                readonly description: "Name of the first generative model used for data augmentation.";
                readonly type: "string";
                readonly examples: readonly ["gpt-3.5-turbo"];
            };
            readonly generate_model2_name: {
                readonly default: "gpt-3.5-turbo";
                readonly description: "Name of the second generative model used for data augmentation.";
                readonly type: "string";
                readonly examples: readonly ["gpt-3.5-turbo"];
            };
            readonly judge_model_name: {
                readonly default: "gpt-4-turbo";
                readonly description: "Name of the model used to judge or evaluate the generated data.";
                readonly type: "string";
                readonly examples: readonly ["gpt-3.5-turbo"];
            };
            readonly num_evolutions: {
                readonly default: 5;
                readonly description: "Number of times the data should be evolved or augmented.";
                readonly format: "int32";
                readonly type: "integer";
                readonly examples: readonly [2];
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly openai_api_key: {
                readonly default: "YOUR_OPENAPI_KEY";
                readonly description: "API key for authentication with the OpenAI service.";
                readonly type: "string";
                readonly examples: readonly ["YOUR_OPENAI_API_KEY"];
            };
            readonly task: {
                readonly default: "evol_instruct";
                readonly description: "The task to perform: evolving instructions or generating preference data.\n\nDefault: `evol_instruct`";
                readonly enum: readonly ["evol_instruct", "preference_data_augmentation"];
                readonly type: "string";
                readonly examples: readonly ["evol_instruct"];
            };
        };
        readonly required: readonly ["data_config", "task", "generate_model1_name", "generate_model2_name", "judge_model_name", "num_evolutions", "openai_api_key"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGenerateImg2Img: {
    readonly body: {
        readonly properties: {
            readonly guidance_scale: {
                readonly description: "Prompt guidance scale";
                readonly format: "float";
                readonly maximum: 50;
                readonly minimum: 5;
                readonly type: "number";
                readonly examples: readonly [7.5];
            };
            readonly init_image_url: {
                readonly description: "Input Image File";
                readonly format: "binary";
                readonly type: "string";
            };
            readonly negprompt: {
                readonly description: "Negative text prompt for output image";
                readonly type: "string";
                readonly examples: readonly ["deformed, bad anatomy, disfigured, poorly drawn face"];
            };
            readonly prompt: {
                readonly description: "Input prompt to create output image";
                readonly type: "string";
                readonly examples: readonly ["a fantasy wonderland"];
            };
            readonly seed: {
                readonly description: "Randum number used to initialize the image generation";
                readonly format: "int64";
                readonly type: "integer";
                readonly examples: readonly [2414];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly steps: {
                readonly description: "Sampling steps per image";
                readonly format: "int64";
                readonly maximum: 500;
                readonly minimum: 30;
                readonly type: "integer";
                readonly examples: readonly [30];
            };
            readonly strength: {
                readonly description: "Controls how much the original image will be modified";
                readonly format: "float";
                readonly maximum: 1;
                readonly minimum: 0;
                readonly type: "number";
                readonly examples: readonly [0.75];
            };
        };
        readonly required: readonly ["init_image_url", "prompt"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGeneratePhotoMaker: {
    readonly body: {
        readonly properties: {
            readonly init_image_url: {
                readonly description: "Input Image File. Supported Formats: `.jpg, .jpeg, .png`\n";
                readonly format: "binary";
                readonly type: "string";
            };
            readonly negprompt: {
                readonly description: "Negative text prompt for output image";
                readonly type: "string";
                readonly examples: readonly ["deformed, bad anatomy, disfigured, poorly drawn face"];
            };
            readonly optimize: {
                readonly default: false;
                readonly description: "When the \"optimize\" is set to true, the model operates in an optimized mode, enhancing the speed of its processing. This allows for quicker inference times.";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly prompt: {
                readonly description: "Input prompt to create output image";
                readonly type: "string";
                readonly examples: readonly ["a man wearing a leather jacket"];
            };
            readonly safe_filter: {
                readonly default: true;
                readonly description: "When the \"safe_filter\" is set to true, the model will actively filter out any potential NSFW (Not Safe for Work) content, ensuring a safer and more appropriate experience for users. However, it is important to note that the Safe Filter is not foolproof, and users must remain vigilant and take necessary steps to comply with the platform's Terms of Service.";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
            readonly samples: {
                readonly description: "No. of images to be generated";
                readonly format: "int64";
                readonly maximum: 3;
                readonly minimum: 1;
                readonly type: "integer";
                readonly examples: readonly [1];
            };
            readonly seed: {
                readonly description: "Random number used to initialize the image generation. Use the same seed for reproducability";
                readonly format: "int64";
                readonly type: "integer";
                readonly examples: readonly [2414];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly steps: {
                readonly description: "Number of sampling steps (more steps can lead to better results but it also leads to higher processing time)";
                readonly format: "int64";
                readonly maximum: 60;
                readonly minimum: 10;
                readonly type: "integer";
                readonly examples: readonly [30];
            };
            readonly strength: {
                readonly description: "It defines how much the output image should follow your provided initial image";
                readonly format: "int64";
                readonly maximum: 60;
                readonly minimum: 10;
                readonly type: "integer";
                readonly examples: readonly [30];
            };
            readonly style: {
                readonly description: "Use this parameter to steer the image generation model toward a specific style";
                readonly enum: readonly ["enhance", "anime", "photographic", "digital-art", "comic-book", "fantasy-art", "analog-film", "neonpunk", "isometric", "lowpoly", "origami", "line-art", "craft-clay", "cinematic", "3d-model", "pixel-art", "texture", "futuristic", "realism", "watercolor", "photorealistic"];
                readonly type: "string";
                readonly examples: readonly ["anime"];
            };
        };
        readonly required: readonly ["prompt", "init_image_url"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGeneratePix2Pix: {
    readonly body: {
        readonly properties: {
            readonly guidance_scale: {
                readonly description: "It defines how much the output image should follow your text prompt";
                readonly format: "float";
                readonly maximum: 50;
                readonly minimum: 5;
                readonly type: "number";
                readonly examples: readonly [12.5];
            };
            readonly image_guidance_scale: {
                readonly description: "It defines how much the output image should follow your provided initial image";
                readonly format: "float";
                readonly maximum: 5;
                readonly minimum: 0;
                readonly type: "number";
                readonly examples: readonly [1.5];
            };
            readonly init_image_url: {
                readonly description: "Input Image File. Supported Formats: `.jpg, .jpeg, .png`\n";
                readonly format: "binary";
                readonly type: "string";
            };
            readonly negprompt: {
                readonly description: "Negative text prompt for output image";
                readonly type: "string";
                readonly examples: readonly ["deformed, bad anatomy, disfigured, poorly drawn face"];
            };
            readonly prompt: {
                readonly description: "Input prompt to create output image";
                readonly type: "string";
                readonly examples: readonly ["add snow on the street"];
            };
            readonly seed: {
                readonly description: "Randum number used to initialize the image generation";
                readonly format: "int64";
                readonly type: "integer";
                readonly examples: readonly [2414];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly steps: {
                readonly description: "Number of sampling steps (more steps can lead to better results but it also leads to higher cost)";
                readonly format: "int64";
                readonly maximum: 500;
                readonly minimum: 30;
                readonly type: "integer";
                readonly examples: readonly [50];
            };
        };
        readonly required: readonly ["prompt", "init_image_url"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGenerateSdxlBase: {
    readonly body: {
        readonly properties: {
            readonly aspect_ratio: {
                readonly description: "orientiation of output";
                readonly enum: readonly ["square", "portrait", "landscape"];
                readonly type: "string";
                readonly examples: readonly ["square"];
            };
            readonly enhance: {
                readonly default: false;
                readonly description: "When the \"enhance\" is set to true, the model focuses on improving the quality of the image output. This setting can work well in conjunction with the \"optimize\" setting, allowing for a balance between speed and quality.";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly guidance_scale: {
                readonly description: "It defines how much the output image should follow your text prompt";
                readonly format: "float";
                readonly maximum: 50;
                readonly minimum: 5;
                readonly type: "number";
                readonly examples: readonly [7.5];
            };
            readonly negprompt: {
                readonly description: "Negative text prompt for output image";
                readonly type: "string";
                readonly examples: readonly ["deformed, bad anatomy, disfigured, poorly drawn face"];
            };
            readonly optimize: {
                readonly default: false;
                readonly description: "When the \"optimize\" is set to true, the model operates in an optimized mode, enhancing the speed of its processing. This allows for quicker inference times.";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly prompt: {
                readonly description: "Input prompt to create output image";
                readonly type: "string";
                readonly examples: readonly ["detailed sketch of lion by greg rutkowski, beautiful, intricate, ultra realistic, elegant, art by artgerm"];
            };
            readonly safe_filter: {
                readonly default: true;
                readonly description: "When the \"safe_filter\" is set to true, the model will actively filter out any potential NSFW (Not Safe for Work) content, ensuring a safer and more appropriate experience for users. However, it is important to note that the Safe Filter is not foolproof, and users must remain vigilant and take necessary steps to comply with the platform's Terms of Service.";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
            readonly samples: {
                readonly description: "No. of images to be generated";
                readonly format: "int64";
                readonly maximum: 4;
                readonly minimum: 1;
                readonly type: "integer";
                readonly examples: readonly [2];
            };
            readonly seed: {
                readonly description: "Random number used to initialize the image generation";
                readonly format: "int64";
                readonly type: "integer";
                readonly examples: readonly [2414];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly steps: {
                readonly description: "Number of sampling steps (more steps can lead to better results but it also leads to higher cost)";
                readonly format: "int64";
                readonly maximum: 500;
                readonly minimum: 30;
                readonly type: "integer";
                readonly examples: readonly [50];
            };
            readonly style: {
                readonly description: "Use this parameter to steer the image generation model toward a specific style";
                readonly enum: readonly ["enhance", "anime", "photographic", "digital-art", "comic-book", "fantasy-art", "analog-film", "neonpunk", "isometric", "lowpoly", "origami", "line-art", "craft-clay", "cinematic", "3d-model", "pixel-art", "texture", "futuristic", "realism", "watercolor", "photorealistic"];
                readonly type: "string";
                readonly examples: readonly ["anime"];
            };
        };
        readonly required: readonly ["prompt"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGenerateSpeech2TextV2: {
    readonly body: {
        readonly properties: {
            readonly diarize: {
                readonly description: "Employs an embedding model to identify speakers, along with their respective transcripts and durations";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly do_sample: {
                readonly default: true;
                readonly description: "Whether or not to use sampling ; use greedy decoding otherwise. When set to True, this parameter enables decoding strategies such as beam-search multinomial sampling, Top-K sampling and Top-p sampling etc. All these strategies select the next token from the probability distribution over the entire vocabulary with various strategy-specific adjustments.";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
            readonly file: {
                readonly description: "Input audio or video file. Size upto 8MB.\nsupported file formats: `m4a, mp3, mp4, mpeg, mpga, wav, webm, ogg`\n";
                readonly format: "binary";
                readonly type: "string";
            };
            readonly language: {
                readonly description: "Defines the language for transcription output. Translates the transcript to your preferred language\n<br>Allowed options:  <br>`'af', 'am', 'ar', 'as', 'az', 'ba', 'be', 'bg', 'bn', 'bo', 'br', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gl', 'gu', 'ha', 'haw', 'he', 'hi', 'hr', 'ht', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'jw', 'ka', 'kk', 'km', 'kn', 'ko', 'la', 'lb', 'ln', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml', 'mn', 'mr', 'ms', 'mt', 'my', 'ne', 'nl', 'nn', 'no', 'oc', 'pa', 'pl', 'ps', 'pt', 'ro', 'ru', 'sa', 'sd', 'si', 'sk', 'sl', 'sn', 'so', 'sq', 'sr', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'tk', 'tl', 'tr', 'tt', 'uk', 'ur', 'uz', 'vi', 'yi', 'yo', 'zh'`\n";
                readonly type: "string";
                readonly examples: readonly ["en"];
            };
            readonly num_speakers: {
                readonly description: "Number of speakers present in the audio file. Used in conjunction with the \"diarize\" parameter, which enables speaker diarization. Provide an accurate value to achieve precise speaker identification.";
                readonly maximum: 10;
                readonly minimum: 2;
                readonly type: "integer";
                readonly examples: readonly ["None"];
            };
            readonly repetition_penalty: {
                readonly default: 0.9;
                readonly description: "The model uses this penalty to discourage the repetition of tokens in the output";
                readonly format: "float";
                readonly maximum: 1.5;
                readonly minimum: 0;
                readonly type: "number";
                readonly examples: readonly [0.9];
            };
            readonly temperature: {
                readonly default: 0.9;
                readonly description: "The value used to modulate the next token probabilities.";
                readonly format: "float";
                readonly maximum: 1.5;
                readonly minimum: 0;
                readonly type: "number";
                readonly examples: readonly [0.9];
            };
            readonly top_k: {
                readonly default: 50;
                readonly description: "The number of highest probability vocabulary tokens to keep for top-k-filtering.";
                readonly format: "int64";
                readonly type: "integer";
                readonly examples: readonly [50];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly top_p: {
                readonly default: 0.9;
                readonly description: "Top-p sampling helps generate more diverse and creative text by considering a broader range of tokens";
                readonly format: "float";
                readonly maximum: 1;
                readonly minimum: 0;
                readonly type: "number";
                readonly examples: readonly [0.9];
            };
            readonly transcription_format: {
                readonly description: "Defines the output format.";
                readonly enum: readonly ["text", "srt"];
                readonly type: "string";
                readonly examples: readonly ["text"];
            };
        };
        readonly required: readonly ["file"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGenerateSunoaiBark: {
    readonly body: {
        readonly properties: {
            readonly file: {
                readonly description: "file that needs to be cloned. \nSupported file formats: `m4a, mp3, mp4, mpeg, mpga, wav, webm, ogg`. \nThis parameter is utilized exclusively alongside the voice_clone functionality\n";
                readonly format: "binary";
                readonly type: "string";
            };
            readonly prompt: {
                readonly description: "Input prompt to create output audio file";
                readonly type: "string";
                readonly examples: readonly ["What's the meaning of life?"];
            };
            readonly sample_rate: {
                readonly description: "Sampling rate for output audio";
                readonly format: "int64";
                readonly type: "integer";
                readonly examples: readonly [25000];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly speaker: {
                readonly description: "Defines the language and speaker for speech. \nAccepted Format: `{language}_speaker_{number}`\nSupported Languages: \n`'de': 'German',   'en': 'English',   'es': 'Spanish',   'fr': 'French',   'hi': 'Hindi',   'it': 'Italian',   'ja': 'Japanese',   'ko': 'Korean',   'pl': 'Polish',   'pt': 'Portuguese',   'ru': 'Russian',   'tr': 'Turkish',   'zh': 'Chinese'`\nSupported numbers: 0 to 9\n";
                readonly type: "string";
                readonly examples: readonly ["en_speaker_6"];
            };
            readonly text_temp: {
                readonly description: "Temperature setting for text prompt";
                readonly format: "float";
                readonly maximum: 1;
                readonly minimum: 0.1;
                readonly type: "number";
                readonly examples: readonly [0.5];
            };
            readonly voice_clone: {
                readonly default: false;
                readonly description: "When the voice_clone parameter is set to True, the model attempts to replicate the vocal characteristics of the speaker, aiming to generate an audio file that closely emulates the original voice.\nPlease note that the accuracy of this emulation can vary\n";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly wave_temp: {
                readonly description: "Temperature setting for audio waveform";
                readonly format: "float";
                readonly maximum: 1;
                readonly minimum: 0.1;
                readonly type: "number";
                readonly examples: readonly [0.5];
            };
        };
        readonly required: readonly ["prompt"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGenerateTxt2Img: {
    readonly body: {
        readonly properties: {
            readonly aspect_ratio: {
                readonly description: "orientiation of output";
                readonly enum: readonly ["square", "portrait", "landscape"];
                readonly type: "string";
                readonly examples: readonly ["square"];
            };
            readonly guidance_scale: {
                readonly description: "It defines how much the output image should follow your text prompt";
                readonly format: "float";
                readonly maximum: 50;
                readonly minimum: 5;
                readonly type: "number";
                readonly examples: readonly [7.5];
            };
            readonly negprompt: {
                readonly description: "Negative text prompt for output image";
                readonly type: "string";
                readonly examples: readonly ["deformed, bad anatomy, disfigured, poorly drawn face"];
            };
            readonly prompt: {
                readonly description: "Input prompt to create output image";
                readonly type: "string";
                readonly examples: readonly ["detailed sketch of lion by greg rutkowski, beautiful, intricate, ultra realistic, elegant, art by artgerm"];
            };
            readonly safe_filter: {
                readonly default: true;
                readonly description: "When the \"safe_filter\" is set to true, the model will actively filter out any potential NSFW (Not Safe for Work) content, ensuring a safer and more appropriate experience for users. However, it is important to note that the Safe Filter is not foolproof, and users must remain vigilant and take necessary steps to comply with the platform's Terms of Service.";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
            readonly samples: {
                readonly description: "No. of images to be generated";
                readonly format: "int64";
                readonly maximum: 4;
                readonly minimum: 1;
                readonly type: "integer";
                readonly examples: readonly [1];
            };
            readonly seed: {
                readonly description: "Randum number used to initialize the image generation";
                readonly format: "int64";
                readonly type: "integer";
                readonly examples: readonly [2414];
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly steps: {
                readonly description: "Number of sampling steps (more steps can lead to better results but it also leads to higher cost)";
                readonly format: "int64";
                readonly maximum: 500;
                readonly minimum: 30;
                readonly type: "integer";
                readonly examples: readonly [15];
            };
            readonly style: {
                readonly description: "Use this parameter to steer the image generation model toward a specific style";
                readonly enum: readonly ["enhance", "anime", "photographic", "digital-art", "comic-book", "fantasy-art", "analog-film", "neonpunk", "isometric", "lowpoly", "origami", "line-art", "craft-clay", "cinematic", "3d-model", "pixel-art", "texture", "futuristic", "realism", "watercolor", "photorealistic"];
                readonly type: "string";
                readonly examples: readonly ["anime"];
            };
        };
        readonly required: readonly ["prompt"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGenerateWhisper: {
    readonly body: {
        readonly properties: {
            readonly beam_size: {
                readonly default: 5;
                readonly description: "Controls the breadth of the search for the best transcription.\nA larger beam size results in better quality output, but slower inference times.\n";
                readonly maximum: 100;
                readonly minimum: 1;
            };
            readonly best_of: {
                readonly default: 8;
                readonly description: "Determines the number of diverse transcription versions generated and considered, useful for exploring different audio interpretations\n";
                readonly minimum: 1;
            };
            readonly diarize: {
                readonly description: "Employs an embedding model to identify speakers, along with their respective transcripts and durations";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly file: {
                readonly description: "Input audio or video file. Size upto 8MB.\nsupported file formats: `m4a, mp3, mp4, mpeg, mpga, wav, webm, ogg`\n";
                readonly format: "binary";
                readonly type: "string";
            };
            readonly language: {
                readonly description: "Defines the language for transcription output. Translates the transcript to your preferred language\n<br>Allowed options:  <br>`'af', 'am', 'ar', 'as', 'az', 'ba', 'be', 'bg', 'bn', 'bo', 'br', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gl', 'gu', 'ha', 'haw', 'he', 'hi', 'hr', 'ht', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'jw', 'ka', 'kk', 'km', 'kn', 'ko', 'la', 'lb', 'ln', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml', 'mn', 'mr', 'ms', 'mt', 'my', 'ne', 'nl', 'nn', 'no', 'oc', 'pa', 'pl', 'ps', 'pt', 'ro', 'ru', 'sa', 'sd', 'si', 'sk', 'sl', 'sn', 'so', 'sq', 'sr', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'tk', 'tl', 'tr', 'tt', 'uk', 'ur', 'uz', 'vi', 'yi', 'yo', 'zh'`\n";
                readonly type: "string";
                readonly examples: readonly ["en"];
            };
            readonly num_speakers: {
                readonly description: "Number of speakers present in the audio file. Used in conjunction with the \"diarize\" parameter, which enables speaker diarization. Provide an accurate value to achieve precise speaker identification.";
                readonly maximum: 10;
                readonly minimum: 2;
                readonly type: "integer";
                readonly examples: readonly ["None"];
            };
            readonly prompt: {
                readonly description: "Input prompt for Audio files";
                readonly type: "string";
                readonly examples: readonly [""];
            };
            readonly remove_silence: {
                readonly description: "Remove silence from Audio files before processing";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly transcription_format: {
                readonly description: "Defines the output format.";
                readonly enum: readonly ["text", "srt", "word", "verbose"];
                readonly type: "string";
                readonly examples: readonly ["text"];
            };
        };
        readonly required: readonly ["file"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhook_url_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Webhook URL name to get task status. These webhooks should be registered with Monster API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly callback_url: {
                    readonly description: "Callback URL for status update";
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request Accepted Successfully"];
                };
                readonly process_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aaaaaa-bbbbbb-cc-ggh"];
                };
                readonly status_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://api.monsterapi.ai/v1/status/aaaaaa-bbbbbb-cc-ggh"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Payload | Payload missing"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorised"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Insufficient Credits. Please recharge..."];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unsupported Media"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Quota Exceeded"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { PostGenerateDataAugmentationService, PostGenerateImg2Img, PostGeneratePhotoMaker, PostGeneratePix2Pix, PostGenerateSdxlBase, PostGenerateSpeech2TextV2, PostGenerateSunoaiBark, PostGenerateTxt2Img, PostGenerateWhisper };
