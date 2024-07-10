import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * The Data Augmentation Service enables users to expand their datasets by generating
     * additional data rows based on existing data or creating a new preference dataset. This
     * service is particularly useful for model fine-tuning, leading to better performance by
     * introducing more varied data.
     *
     * Users can specify details about the data to be augmented, including source type and data
     * split, and choose between two tasks: generating evolved instructions or generating
     * preference datasets.
     *
     * Note: Due to OpenAI token generation Rate limits, right now the service is avialable to
     * models with > 400,000 TPM. accesible through Tier 2 and above accounts.
     *
     *
     * @summary Data Augmentation Service
     * @throws FetchError<400, types.PostGenerateDataAugmentationServiceResponse400> Forbidden
     * @throws FetchError<401, types.PostGenerateDataAugmentationServiceResponse401> Unauthorised
     * @throws FetchError<403, types.PostGenerateDataAugmentationServiceResponse403> Forbidden
     * @throws FetchError<415, types.PostGenerateDataAugmentationServiceResponse415> Unsupported Media Type
     * @throws FetchError<429, types.PostGenerateDataAugmentationServiceResponse429> Too Many requests
     * @throws FetchError<500, types.PostGenerateDataAugmentationServiceResponse500> Internal Server Error
     */
    postGenerateDataAugmentationService(body: types.PostGenerateDataAugmentationServiceBodyParam, metadata?: types.PostGenerateDataAugmentationServiceMetadataParam): Promise<FetchResponse<200, types.PostGenerateDataAugmentationServiceResponse200>>;
    /**
     * Image to Image API allows you to generate that resembles an original image provided by
     * you, using stable diffusion model.
     *
     * Image to Image model requires a text prompt and an initial image url as the inputs to
     * render a new image which has similar style and content to the initial image, but
     * different details and composition.
     *
     * Make sure to use <a
     * href='https://developer.monsterapi.ai/reference/get_status-process-id'>Fetch Results
     * API</a> after **process_id** is received
     *
     * This API supports file uploads upto 8MB. For larger files checkout our Recipe Below
     *
     * This API supports following use-cases:
     *   - Want to upload a file < 8MB: Checkout `Image2Image - Sample Code` Recipe
     *   - Want to upload a file > 8MB: Checkout `File Upload > 8MB` Recipe
     *   - Want to send file url instead of upload: Checkout `Image2Image File URL` Recipe
     *
     *
     * @summary Image to Image
     * @throws FetchError<400, types.PostGenerateImg2ImgResponse400> Forbidden
     * @throws FetchError<401, types.PostGenerateImg2ImgResponse401> Unauthorised
     * @throws FetchError<403, types.PostGenerateImg2ImgResponse403> Forbidden
     * @throws FetchError<415, types.PostGenerateImg2ImgResponse415> Unsupported Media Type
     * @throws FetchError<429, types.PostGenerateImg2ImgResponse429> Too Many requests
     * @throws FetchError<500, types.PostGenerateImg2ImgResponse500> Internal Server Error
     */
    postGenerateImg2img(body: types.PostGenerateImg2ImgBodyParam, metadata?: types.PostGenerateImg2ImgMetadataParam): Promise<FetchResponse<200, types.PostGenerateImg2ImgResponse200>>;
    /**
     * Photomaker API allows you to create realistic customizations of input images.
     *
     * Photomaker developed by [Tencent ARC Lab](https://github.com/TencentARC/PhotoMaker)
     * enables the encoding of multiple input ID images into a unified representation.
     *
     * The model requires a text prompt and an reference image as an input to render images
     * that are conditioned on your provided text prompt.
     *
     * Make sure to use <a
     * href='https://developer.monsterapi.ai/reference/get_status-process-id'>Fetch Results
     * API</a> after **process_id** is received
     *
     *
     * @summary PhotoMaker
     * @throws FetchError<400, types.PostGeneratePhotoMakerResponse400> Forbidden
     * @throws FetchError<401, types.PostGeneratePhotoMakerResponse401> Unauthorised
     * @throws FetchError<403, types.PostGeneratePhotoMakerResponse403> Forbidden
     * @throws FetchError<415, types.PostGeneratePhotoMakerResponse415> Unsupported Media Type
     * @throws FetchError<429, types.PostGeneratePhotoMakerResponse429> Too Many requests
     * @throws FetchError<500, types.PostGeneratePhotoMakerResponse500> Internal Server Error
     */
    postGeneratePhotoMaker(body: types.PostGeneratePhotoMakerBodyParam, metadata?: types.PostGeneratePhotoMakerMetadataParam): Promise<FetchResponse<200, types.PostGeneratePhotoMakerResponse200>>;
    /**
     * Pix2Pix API allows you to edit any image by using simple text instructions. This API
     * uses Instruct-pix2pix model made by [Timothy
     * Brooks](https://www.timothybrooks.com/instruct-pix2pix/).
     *
     * Pix2Pix model requires a text prompt and an initial image url as the inputs to render a
     * new image which has similar style and content to the initial image, but different
     * details and composition.
     *
     * Make sure to use <a
     * href='https://developer.monsterapi.ai/reference/get_status-process-id'>Fetch Results
     * API</a> after **process_id** is received
     *
     * This API supports following use-cases:
     *   - Want to upload a file < 8MB: Checkout `Pix2Pix - Sample Code` Recipe
     *   - Want to upload a file > 8MB: Checkout `File Upload > 8MB` Recipe
     *   - Want to send file url instead of upload: Checkout `Pix2Pix File URL` Recipe
     *
     *
     * @summary Instruct-pix2pix
     * @throws FetchError<400, types.PostGeneratePix2PixResponse400> Forbidden
     * @throws FetchError<401, types.PostGeneratePix2PixResponse401> Unauthorised
     * @throws FetchError<403, types.PostGeneratePix2PixResponse403> Forbidden
     * @throws FetchError<415, types.PostGeneratePix2PixResponse415> Unsupported Media Type
     * @throws FetchError<429, types.PostGeneratePix2PixResponse429> Too Many requests
     * @throws FetchError<500, types.PostGeneratePix2PixResponse500> Internal Server Error
     */
    postGeneratePix2pix(body: types.PostGeneratePix2PixBodyParam, metadata?: types.PostGeneratePix2PixMetadataParam): Promise<FetchResponse<200, types.PostGeneratePix2PixResponse200>>;
    /**
     * SDXL 1.0 is the flagship image model from Stability AI and the best open model for image
     * generation
     * The SDXL Model can generate images of high quality in virtually any art style and is the
     * best open model for photorealism.
     *
     * The model requires a text prompt as an input to render images that are conditioned on
     * your provided text prompt.
     *
     * Make sure to use <a
     * href='https://developer.monsterapi.ai/reference/get_status-process-id'>Fetch Results
     * API</a> after **process_id** is received
     *
     *
     * @summary Text to Image SDXL
     * @throws FetchError<400, types.PostGenerateSdxlBaseResponse400> Forbidden
     * @throws FetchError<401, types.PostGenerateSdxlBaseResponse401> Unauthorised
     * @throws FetchError<403, types.PostGenerateSdxlBaseResponse403> Forbidden
     * @throws FetchError<415, types.PostGenerateSdxlBaseResponse415> Unsupported Media Type
     * @throws FetchError<429, types.PostGenerateSdxlBaseResponse429> Too Many requests
     * @throws FetchError<500, types.PostGenerateSdxlBaseResponse500> Internal Server Error
     */
    postGenerateSdxlBase(body: types.PostGenerateSdxlBaseBodyParam, metadata?: types.PostGenerateSdxlBaseMetadataParam): Promise<FetchResponse<200, types.PostGenerateSdxlBaseResponse200>>;
    /**
     * Speech to Text v2 API allows you to transcribe any audio file using OpenAI-Whisper
     * Large-v3 model.
     *
     * OpenAI Whisper is an open-source automatic speech recognition (ASR) system trained on
     * 680,000 hours of multilingual and multitask supervised data collected from the web.
     *
     * The large-v3 model shows improved performance over a wide variety of languages, showing
     * 10% to 20% reduction of errors compared to Whisper large-v2.
     *
     * Make sure to use <a
     * href='https://developer.monsterapi.ai/reference/get_status-process-id'>Fetch Results
     * API</a> after **process_id** is received
     *
     * This API supports following use-cases:
     *   - Want to upload a file < 8MB: Checkout `Whisper - Sample Code` Recipe
     *   - Want to upload a file > 8MB: Checkout `File Upload > 8MB` Recipe
     *   - Want to send file url instead of upload: Checkout `Whisper File URL` Recipe
     *
     *
     * @summary Speech to Text v2 - Whisper Large-v3
     * @throws FetchError<400, types.PostGenerateSpeech2TextV2Response400> Forbidden
     * @throws FetchError<401, types.PostGenerateSpeech2TextV2Response401> Unauthorised
     * @throws FetchError<403, types.PostGenerateSpeech2TextV2Response403> Forbidden
     * @throws FetchError<415, types.PostGenerateSpeech2TextV2Response415> Unsupported Media Type
     * @throws FetchError<429, types.PostGenerateSpeech2TextV2Response429> Too Many requests
     * @throws FetchError<500, types.PostGenerateSpeech2TextV2Response500> Internal Server Error
     */
    postGenerateSpeech2textV2(body: types.PostGenerateSpeech2TextV2BodyParam, metadata?: types.PostGenerateSpeech2TextV2MetadataParam): Promise<FetchResponse<200, types.PostGenerateSpeech2TextV2Response200>>;
    /**
     * Text to Speech API allows you to convert text to an audio file using Suno AI Bark model.
     *
     * Bark is a transformer-based text-to-audio model created by [Suno](https://suno.ai/).
     * Bark can generate highly realistic, multilingual speech as well as other audio -
     * including music, background noise and simple sound effects.
     *
     * API supports generating audio files of extended length (upto 60 min)
     * Different sample rates, speaker, text and waveform temperature will result in different
     * quality or texture of voice in the output audio file
     *
     * Make sure to use <a
     * href='https://developer.monsterapi.ai/reference/get_status-process-id'>Fetch Results
     * API</a> after **process_id** is received
     *
     * This API supports following use-cases:
     *   - Want to upload a file < 8MB: Checkout `Sunoai Bark - Sample Code` Recipe
     *   - Want to upload a file > 8MB: Checkout `File Upload > 8MB` Recipe
     *   - Want to send file url instead of upload: Checkout `Sunoai Bark File URL` Recipe
     *
     *
     * @summary Text to Speech - Bark
     * @throws FetchError<400, types.PostGenerateSunoaiBarkResponse400> Forbidden
     * @throws FetchError<401, types.PostGenerateSunoaiBarkResponse401> Unauthorised
     * @throws FetchError<403, types.PostGenerateSunoaiBarkResponse403> Forbidden
     * @throws FetchError<415, types.PostGenerateSunoaiBarkResponse415> Unsupported Media Type
     * @throws FetchError<429, types.PostGenerateSunoaiBarkResponse429> Too Many requests
     * @throws FetchError<500, types.PostGenerateSunoaiBarkResponse500> Internal Server Error
     */
    postGenerateSunoaiBark(body: types.PostGenerateSunoaiBarkBodyParam, metadata?: types.PostGenerateSunoaiBarkMetadataParam): Promise<FetchResponse<200, types.PostGenerateSunoaiBarkResponse200>>;
    /**
     * Text to image API allows you to generate an image that looks similar to your provided
     * text prompt using Pix-Art-Sigma Model.
     *
     * Text to Image model requires a text prompt as an input to render images that are
     * conditioned on your provided text prompt.
     *
     * Make sure to use <a
     * href='https://developer.monsterapi.ai/reference/get_status-process-id'>Fetch Results
     * API</a> after **process_id** is received
     *
     *
     * @summary Text to Image
     * @throws FetchError<400, types.PostGenerateTxt2ImgResponse400> Forbidden
     * @throws FetchError<401, types.PostGenerateTxt2ImgResponse401> Unauthorised
     * @throws FetchError<403, types.PostGenerateTxt2ImgResponse403> Forbidden
     * @throws FetchError<415, types.PostGenerateTxt2ImgResponse415> Unsupported Media Type
     * @throws FetchError<429, types.PostGenerateTxt2ImgResponse429> Too Many requests
     * @throws FetchError<500, types.PostGenerateTxt2ImgResponse500> Internal Server Error
     */
    postGenerateTxt2img(body: types.PostGenerateTxt2ImgBodyParam, metadata?: types.PostGenerateTxt2ImgMetadataParam): Promise<FetchResponse<200, types.PostGenerateTxt2ImgResponse200>>;
    /**
     * Speech to Text API allows you to transcribe any audio file using OpenAI-Whisper Large-v2
     * model.
     *
     * OpenAI Whisper is an open-source automatic speech recognition (ASR) system trained on
     * 680,000 hours of multilingual and multitask supervised data collected from the web.
     *   `Large-v2` is a biggest version of whisper model and offers superior transcription
     * quality.
     *
     * Make sure to use <a
     * href='https://developer.monsterapi.ai/reference/get_status-process-id'>Fetch Results
     * API</a> after **process_id** is received
     *
     * This API supports following use-cases:
     *   - Want to upload a file < 8MB: Checkout `Whisper - Sample Code` Recipe
     *   - Want to upload a file > 8MB: Checkout `File Upload > 8MB` Recipe
     *   - Want to send file url instead of upload: Checkout `Whisper File URL` Recipe
     *
     *
     * @summary Speech to Text - Whisper
     * @throws FetchError<400, types.PostGenerateWhisperResponse400> Forbidden
     * @throws FetchError<401, types.PostGenerateWhisperResponse401> Unauthorised
     * @throws FetchError<403, types.PostGenerateWhisperResponse403> Forbidden
     * @throws FetchError<415, types.PostGenerateWhisperResponse415> Unsupported Media Type
     * @throws FetchError<429, types.PostGenerateWhisperResponse429> Too Many requests
     * @throws FetchError<500, types.PostGenerateWhisperResponse500> Internal Server Error
     */
    postGenerateWhisper(body: types.PostGenerateWhisperBodyParam, metadata?: types.PostGenerateWhisperMetadataParam): Promise<FetchResponse<200, types.PostGenerateWhisperResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
