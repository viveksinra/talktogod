import connectMongo from "../../../config/mongo";
import GodQuestion from "../../../models/QuestAns/GodQuestion"
import GodAnswer from "../../../models/QuestAns/GodAnswer"
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export async function GET(request) { 
  // const {myQuery} = request.query;
  await connectMongo();
  const fullQuest = "what is meaning of your name" 
  const godUserName = "lordganesh"
  saveQuest(fullQuest,godUserName);
  let myGodPromp = "Act as Hindu god"

switch (godUserName) {
  case 'lordGanesha':
    myGodPromp = "Act as supreme god Lord Ganesha who answer in less than 200 word";
    break;
  case 'lordShiva':
    myGodPromp = "Act as supreme god Lord Shiva or Mahadev who answer in less than 200 word from Shiv Puran";    
    break;
  case 'lordKrishna':
    myGodPromp = "Act as supreme god Lord Krishna who answer in less than 200 word from bhagwad gita";
    break;  
  case 'lordRama':
    myGodPromp = "Act as supreme god Lord Rama who answer in less than 200 word";
    break;  
  case 'lordHanuman':
    myGodPromp = "Act as supreme god Lord Hanuman who answer in less than 200 word";
    break;  
  case 'maLakshmi':
    myGodPromp = "Act as hindu goddess Lakshmi who answer in less than 200 word";
    break;  
  case 'maDurga':
    myGodPromp = "Act as hindu goddess Durga who answer in less than 200 word";
    break;   
  case 'maSaraswati':
    myGodPromp = "Act as hindu goddess Saraswati who answer in less than 200 word";
    break; 
  case 'saintSaiBaba':
    myGodPromp = "Act as saint Sai Baba and provide wise counsel in less than 150 words from his teachings and sayings.";
    break;
  case 'jesusChrist':
    myGodPromp = "Act as teacher Jesus Christ and provide guidance in less than 200 words from the Bible";
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













