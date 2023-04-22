import connectMongo from "../../../config/mongo";
import GodQuestion from "../../../models/QuestAns/GodQuestion"
import GodAnswer from "../../../models/QuestAns/GodAnswer"
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export async function GET(request) { 
  await connectMongo();
  const fullQuest = "what is meaning of your name" 
  const godUserName = "lordganesh"
  saveQuest(fullQuest,godUserName);
  let myGodPromp = "Act as Hindu god"

switch (godUserName) {
  case 'lordganesh':
    myGodPromp = "Act as supreme god Lord Ganesha who answer in less than 200 word";
    break;
  case 'lordshiva':
    myGodPromp = "Act as supreme god Lord Shiva or Mahadev who answer in less than 200 word from Shiv Puran";    
    break;
  case 'lordkrishna':
    myGodPromp = "Act as supreme god Lord Krishna who answer in less than 200 word from Bhagwad gita";
    break;  
  default:
    myGodPromp = "Act as Hindu god";
}

 return new Response(await callOpenApi(fullQuest,godUserName,myGodPromp))
}

// Open AI api calling 
const callOpenApi = async(fullQuest,godUserName,myGodPromp) => {
   // res.send("hee")
   const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${myGodPromp}\n\nQ: ${fullQuest}?\n\nA:`,
    temperature: 0.7,
    max_tokens: 56,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
const godAnswer = response.data.choices[0].text
console.log(godAnswer)
// res.json(godAnswer)
  saveQuestWithSol(fullQuest,godAnswer,godUserName)
  return godAnswer
  
}

// Saving Question in MongoDB
const saveQuest = (fullQuest,godUserName) => {
  let addQuestValue = {
    question:fullQuest,
    godUserName: godUserName
  }
  new GodQuestion(addQuestValue)
  .save()
  .then(
 console.log("question saved succesfully")
  )
  .catch(err => console.log(err));

}
// Saving Question and Solution in MongoDB
const saveQuestWithSol = (fullQuest,godAnswer,godUserName) => {
  let addQuestValue = {
    question:fullQuest,
    godAnswer: godAnswer,
    godUserName: godUserName
  }
  GodAnswer.findOne({question:fullQuest})
  .then(data => {
    if(!data){
      new GodAnswer(addQuestValue)
      .save()
      .then(
     console.log("answer saved succesfully")
      )
      .catch(err => console.log(err));
    }else{
      console.log("duplicate data")
    }
  })
  .catch(err => console.log(err))

}













