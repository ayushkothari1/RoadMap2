const MessageCount = document.querySelector("#message-count");
const textarea = document.querySelector("#textarea");

function restrictMessage() {
  let message = textarea.value;

  if (message.length > 0 && message.length <= 250) {
    MessageCount.innerHTML = message.length + "/250";
    MessageCount.classList.remove("red");
    textarea.classList.remove("red");
    return true;
  }
  if (message.length > 250) {
    MessageCount.innerHTML = "250/250";
    textarea.classList.add("red");
    
    MessageCount.classList.add("red");
    return false;
  }
}
