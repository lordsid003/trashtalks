import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from config import Model, asian_mode_prompt, white_mode_prompt

load_dotenv()

llm = ChatGroq(
    temperature=0.7,
    model="llama3-70b-8192",
    api_key=os.getenv("LLAMA_API_KEY")
)

# Asian Mode
def asian_mode_chain(message: str):
    sequence_chain = asian_mode_prompt | llm.with_structured_output(Model)
    try:
        data = asian_mode_prompt.format(user_message=message)
        response = sequence_chain.invoke(data)
        return response.message
    except:
        error: str = "Response Failure. Just like you la."
        return error
    
# White Mode
def white_mode_chain(message: str):
    sequence_chain = white_mode_prompt | llm.with_structured_output(Model)
    try:
        data = white_mode_prompt.format(user_message=message)
        response = sequence_chain.invoke(data)
        return response.message
    except:
        error: str = "Failure to get response. I think it's your fault."
        return error
    
if __name__ == "__main__":
    print("Steven's Dad: Hi la! Hope you are not a failure like Steven.Go on, Ask me something.")
    while True:
        msg: str = input("Me: ")
        if(msg != ""):
            response = asian_mode_chain(msg)
        else:
            response = "Are you stupid? Ask me something, can you?"
            msg = "..."
        print(f"Steven's Dad: {response}")
        y: str = input("Exit? [y/n]: ")
        if y.lower() == "y":
            break