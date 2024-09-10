# Problem Solver AI

This is a web-based project that allows users to upload images of problems (math, logical, etc.), and an AI model will provide the answer. The project is built using HTML, CSS, and JavaScript.

## Table of Contents

* [Features](#features)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)

## Features

* **Image Upload:** Users can upload an image of the problem they want to solve.
* **AI-Based Solution:** The AI model processes the image and provides an answer to the problem.
* **Responsive Design:** The project is designed to work on all screen sizes, from desktops to mobile devices.

## Demo

You can try the live demo of this project [https://frontend-mentorship-eight.vercel.app/](https://frontend-mentorship-eight.vercel.app/).

## Installation

To run this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/Faraz-Khan-79996/frontend-mentorship.git
   ```
2. Navigate to the project directory:
   ```
   cd frontend-mentorship
   ```
3. Open the `index.html` file in your browser:
   ```
   start index.html 
   ```

* *You can just download the zip file, extract and open index.html.*

## Usage

1. Open the project in your browser.
2. Upload an image of a problem.
3. Wait for the AI to process the image.
4. View the AI's solution displayed on the screen.

## Technologies Used

* **HTML5** - For structuring the web pages.
* **CSS3** - For styling the user interface.
* **JavaScript** - For handling image input and AI integration.
* **OCR Space API** - For extracting text from images.
* **Grok API** - For generating solutions based on the extracted text.

## API Integration

### OCR Space

* **Purpose:** Extracts text from images.
* **Endpoint:** `https://api.ocr.space/parse/image`
* **API Key:** You need to sign up for an [OCR-Space](https://ocr.space/ocrapi/freekey) account to get your API key.

### Grok API

* **Purpose:** Provides answers to the problems based on the extracted text.
* **Endpoint:** `https://api.groq.com/openai/v1/chat/completions`
* **API Key:** You need to sign up for an [gorkCloud](https://console.groq.com/docs/quickstart) account to get your API key.

## Contributing

Contributions are welcome! If you find any issues or have ideas for new features, feel free to open an issue or submit a pull request.
