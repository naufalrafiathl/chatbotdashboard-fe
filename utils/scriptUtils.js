export const generateScript = (chatbot) => {
    const token = localStorage.getItem('token');
    const config = {
      bgColor: chatbot.bgColor,
      buttonTextColor: chatbot.buttonTextColor,
      buttonText: chatbot.buttonText,
      imagePath: chatbot.imagePath,
      logoBgColor: chatbot.logoBgColor,
      senderTextColor: chatbot.senderTextColor,
      storeName: chatbot.storeName,
      popupColorPrimary: chatbot.popupColorPrimary,
      popupColorSecondary: chatbot.popupColorSecondary,
      sendButtonColor: chatbot.sendButtonColor,
      token: token,
    };
  
    const script = `
      (function() {
        var config = ${JSON.stringify(config, null, 2)};
        var iframe = document.createElement('iframe');
        iframe.src = '${process.env.NEXT_PUBLIC_IFRAME_URL}/?config=' + encodeURIComponent(JSON.stringify(config));
        iframe.style.width = '400px';  // Adjust as needed
        iframe.style.height = '600px'; // Adjust as needed
        iframe.style.border = 'none';
        iframe.style.position = 'fixed';
        iframe.style.bottom = '10px';
        iframe.style.right = '10px';
        document.body.appendChild(iframe);
      })();
    `;
  
    const encodedScript = btoa(script);
    return `
      <script>
        (function() {
          var script = '${encodedScript}';
          var decodedScript = atob(script);
          var scriptElement = document.createElement('script');
          scriptElement.innerHTML = decodedScript;
          document.body.appendChild(scriptElement);
        })();
      </script>
    `;
  };
  