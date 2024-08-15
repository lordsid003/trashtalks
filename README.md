# TrashTalks - TrashTalking With AI
<img src="https://github.com/user-attachments/assets/a0db19f6-0be6-4891-a923-9799f6a7450e" width="100px" height="100px"/> 

**TrashTalks** is a React Native application inspired by the theme *"Functionally Dysfunctional"*. This app delivers a hilariously intriguing experience where users get roasted and trash-talked by AI personas of two famous YouTube celebrities: **Gordon Ramsay** and **Steven He's Dad**. The app boasts a visually stunning UI and appealing UX that keeps users entertained while they engage in comically dysfunctional conversations.

---
✨ Download the Application Now at: https://trashtalks-web.vercel.app

---

## How does it align with the theme?
- The theme *"Functionally Dysfunctional"* is brilliantly captured in *TrashTalks*, where the app’s primary function is deliberately infused with humorous dysfunction. Instead of providing straightforward assistance or polite AI interactions, users are met with hilariously aggressive and mocking responses from iconic personalities like **Gordon Ramsay** and **Steven He's dad**.
-  The quirky twist lies in how the app responds: only when specific keywords like *"Chef"* or *"Uncle"* are used will the bots engage, otherwise, users are met with sarcastic memes. **This playful unpredictability highlights the theme by blending functionality with a layer of comical absurdity, making the user experience both useful and hilariously dysfunctional.**

## 🎉 Features

- **AI Personalities**: Chat with AI versions of **Gordon Ramsay** (the famous chef) and **Steven He's Dad** (the "Emotional Damage" meme sensation).
- **Dynamic Responses**: The app uses keyword detection:
  - Type **"Chef"** to summon Gordon Ramsay.
  - Type **"Uncle"** to talk to Steven He's Dad.
- **Meme Responses**: If users don't trigger the AI bots with the correct keywords, they'll be met with a meme response instead.
- **Sample Prompts & Instructions**: The app provides example prompts and a detailed guide to help users get started.
- **Intuitive UI/UX**: A polished and smooth interface designed to offer an engaging user experience.

## 🎨 Application Demo:

https://github.com/user-attachments/assets/c507cb2e-8abc-405f-b08d-5d72e7ee69f8


## 🛠️ Technical Details

### Architecture Overview

- **AI Model**: The app leverages the LLAMA3 model using ChatGroq for powerful conversational AI.
- **Prompt Templating**: Custom prompt templates are used to adapt the AI model to mimic the personalities and speech styles of Gordon Ramsay and Steven He's Dad.
- **Backend**: The app's backend is powered by a Flask RESTful API, deployed and configured for handling message requests and sending responses.
- **Response Structuring**: Responses are processed using sequential chaining to maintain coherent conversations and adapt responses to match the chosen character.
- **React Native**: The app is built with React Native, ensuring compatibility across multiple platforms (iOS, Android) with a seamless performance.

### ✔️ Workflow

1. **Insta Feel**: The chatroom gives instagram feeling in which user can talk to AI bots.
2. **Keyword Detection**: The app checks for keywords ("Chef" or "Uncle") to engage corresponding AI persona.
3. **Request Handling**: The user message is sent to the Flask API, which forwards it to the LLAMA3 model.
4. **AI Response**: The model generates a response based on the chosen personality and sends it back to the app.
5. **Meme Fallback**: If no valid keyword is detected, a humorous meme is displayed instead.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- React Native environment set up ([Instructions](https://reactnative.dev/docs/environment-setup))
- The flask model is already deployed (App already linked to API endpoint)

### Optional for local setup
- Python 3.10 (atleast) installed for Flask API
- Groq Login ([Groq Login](https://groq.com))
- LLAMA3 model setup on ChatGroq([Get your Groq API Key](https://console.groq.com/keys))

### Installation [Using Expo]

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/trashtalks.git
   cd trashtalks
   ```

2. **Install dependencies**:
   ```bash
   npm install
   npx expo install react-native-screens react-native-safe-area-context
   npx expo install @react-navigation/native @react-navigation/native-stack
   ```

3. **Set up the Flask backend** [Optional]:
   - Navigate to the `backend/` directory.
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the Flask server:
     ```bash
     flask app.py
     ```
   - Ensure your backend is running and accessible.

4. **Configure the API endpoint** [Optional]:
    - Configure the host and port in `app.py`:
      ```python
      if __name__ == "__main__":
          app.run(debug=True, host="localhost", port=8000)
      ```
   - In `constants/Data.jsx`, set the `link` variable to your Flask API’s URL:
     ```javascript
     export const link = "http://localhost:8000";
     ```

5. **Run the React Native app**:
   ```bash
   npx expo start // for expo-go app
   npx expo 
   ```

## Gallery:
<p align="center">
  <img src="https://github.com/user-attachments/assets/b0a6ad99-b744-461e-b808-53cb5f2d4212?raw=true" alt="Image 1" width="182"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/d1c33846-b551-43d9-b001-bb8866eea88a?raw=true" alt="Image 1" width="180"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/0ea8f98f-c740-4d7a-8948-c72342b305be?raw=true" alt="Image 2" width="180"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/030bba9d-0065-4d46-86e2-9b2651ef5198?raw=true" alt="Image 3" width="180"/>
</p>

## 🤖 AI Integration

TrashTalks uses the LLAMA3 model from ChatGroq, with custom prompt templates designed to emulate the speech patterns and personas of the selected characters. The integration is managed through Flask APIs, ensuring smooth, low-latency conversations. The Model is integrated with Flask RESTful API to provide connectivity with the application.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to provide suggestions and feedbacks at [siddhverma03@gmail.com](mailto:siddhverma03@gmail.com)

