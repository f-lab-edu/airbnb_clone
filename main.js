import { format } from "date-fns"; // date-fns에서 format 함수만 가져와요
import { emojis } from "./emoji.js";

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();

  // date-fns 모듈에서 가져온 format 함수를 호출해요
  const formattedDate = format(today, "MMMM d, yyyy");
  document.getElementById("dateDisplay").textContent = formattedDate;

  showRandomEmoji();
});

function showRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const selectedEmoji = emojis[randomIndex];

  document.getElementById("emojiDisplay").textContent = selectedEmoji.icon;
  document.getElementById("emojiName").textContent = selectedEmoji.name;
}
