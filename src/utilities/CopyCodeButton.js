const copyButtonLabel = "Copy Code";

let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");
		// button.className += 'btn btn-copy';
    button.innerText = copyButtonLabel;
    button.addEventListener("click", copyCode);
    block.appendChild(button);
  }
});

async function copyCode(event) {
  const button = event.srcElement;
  const pre = button.parentElement;
  let code = pre.querySelector("code");
  let text = code.innerText;
  await navigator.clipboard.writeText(text);
  
  button.innerText = "Code Copied";
  
  setTimeout(()=> {
    button.innerText = copyButtonLabel;
  },1000)
}
