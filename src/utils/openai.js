import OpenAI from "openai";
import {OPENAI_GPT_KEY} from "./constants";
console.log( "OPENAI_GPT_KEY", OPENAI_GPT_KEY)
const openai = new OpenAI({
  apiKey: OPENAI_GPT_KEY,
  dangerouslyAllowBrowser: true
});

export default openai;
