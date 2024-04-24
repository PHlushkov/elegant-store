function tagLine() {
  const closeTagLineBtn = document.querySelector(".tagline__close");
  const tagLine = document.querySelector(".tagline");

  closeTagLineBtn.onclick = function closeTagLine() {
    tagLine.remove();
  };
}

export default tagLine;
