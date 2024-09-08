document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('image-upload');
    const form = document.getElementById('image-form');
    const submitBtn = document.getElementById('submit-btn');
    const errorMsg = document.getElementById('error-msg');
    const extractedTextDiv = document.getElementById('extracted-text');
    const aiResponseDiv = document.getElementById('ai-response');
    let selectedFile = null;
  
    // Handle file change
    fileInput.addEventListener('change', (event) => {
      selectedFile = event.target.files[0];
      if (selectedFile) {
        fileInput.previousElementSibling.textContent = selectedFile.name;
      }
    });
  
    form.addEventListener('submit', async function (event) {
      event.preventDefault(); // Prevent page refresh
  
      errorMsg.textContent = '';
      extractedTextDiv.textContent = '';
      aiResponseDiv.textContent = '';
  
      if (!selectedFile) {
        errorMsg.textContent = 'No file selected. Please upload an image.';
        errorMsg.style.display = 'block';
        return;
      }
  
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';
  
      try {
        // OCR API call (placeholder)
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('apikey', 'K88194021788957');
        formData.append('language', 'eng');
  
        const ocrResponse = await fetch('https://api.ocr.space/parse/image', {
          method: 'POST',
          body: formData,
        });
  
        if (!ocrResponse.ok) throw new Error('OCR API error');
  
        const ocrData = await ocrResponse.json();
        const parsedResults = ocrData?.ParsedResults;
        const extractedText = parsedResults && parsedResults[0]?.ParsedText
          ? parsedResults[0].ParsedText
          : 'No text found';
  
        extractedTextDiv.textContent = `Extracted Text: ${extractedText}`;
  
        // AI API call (placeholder)
        const personalizedPrompt = `This is a question extracted from an image. The spellings may be wrong, so read accordingly. If there are options in the question, please provide an answer by choosing one of the following options based on the text below in bold. Also, add a simple explanation along with the question statement that you understood. Make sure any headings are bold. If there are no options, then answer accordingly. Whatever you answer, write it in bold at the end always:\n\n"${extractedText}"`;
  
        const aiResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer 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`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: personalizedPrompt }],
            model: 'llama3-8b-8192',
          }),
        });
  
        if (!aiResponse.ok) throw new Error('AI API error');
  
        const aiData = await aiResponse.json();
        const gptAnswer = aiData.choices[0]?.message?.content || 'No response from AI';
  
        aiResponseDiv.innerHTML = `AI Response: ${marked.parse(gptAnswer)}`;
  
      } catch (error) {
        errorMsg.textContent = 'Failed to process the image. Please try again.';
        errorMsg.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Upload and Analyze';
      }
    });
  });
  