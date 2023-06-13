
let text = document.getElementById("text");
let Count = 10;
let message = "Happy Independence Day";
setTimeout(() => {
  text.innerText = Count;
  Count--;
  setTimeout(() => {
    text.innerText = Count;
    Count--;
    setTimeout(() => {
      text.innerText = Count;
      Count--;
      setTimeout(() => {
        text.innerText = Count;
        Count--;
        setTimeout(() => {
          text.innerText = Count;
          Count--;
          setTimeout(() => {
            text.innerText = Count;
            Count--;
            setTimeout(() => {
              text.innerText = Count;
              Count--;
              setTimeout(() => {
                text.innerText = Count;
                Count--;
                setTimeout(() => {
                  text.innerText = Count;
                  Count--;
                  setTimeout(() => {
                    text.innerText = Count;
                    Count--;
                    setTimeout(() => {
                      text.innerText = message;
                      if (text.innerText == "Happy Independence Day") {
                        text.classList.add("zoom");
                      }
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// let input="hi guvi"
// console.log(input.split("").reverse().join(""));