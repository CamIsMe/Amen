exports.handler = (event, context) => {

  try{

    if(event.session.new) {
      // New Session
      console.log("NEW SESSION")
    }
    switch(event.request.type) {

      case "LaunchRequest":
        // Launch Request
        console.log('LAUNCH REQUEST')
        context.succeed(
          generateResponse(
            buildSpeechletResponse("Jojo, what you finna do today",true),
            {}
          )
        )
        break;

      case "IntentRequest":
        // Intent Request
        console.log('INTENT REQUEST')

        switch(event.request.intent.name) {
          case "Amen":
            context.succeed(
              generateResponse(
                buildSpeechletResponse("Amen",true)
                {}
              )
            )
            break;

          case "GetMe":
            context.succeed(
              generateResponse(
                buildSpeechletResponse("Yes sir",true)
                {}
              )
            )
            break;

          default:
            throw "Invalid intent"
        }
        break;

      case "SessionEndRequest":
        // Session Ended Request
        console.log('SESSION ENDED REQUEST')
        break;

      default:
        content.fail('INVALID REQUEST TYPE: ${event.request.type}')

    }
  } catch(error) {context.fail('Exception: ${error}') }

}

// Helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {
  return {
    outputSpeech:{
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse, sessionAttributes) => {
   return {
     version: "1.0",
     sessionAttributes: sessionAttributes,
     response: speechletResponse
   }
}
