const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "HAHAHA U CANT SAY NOOOO!!!";
  gif.src = "https://www.bing.com/images/search?view=detailV2&ccid=EcU2ChmW&id=BD738AC00E3B8B2F52AEBA18D4CC54E06B78D9DD&thid=OIP.EcU2ChmWDJ_i0BT2bCg7BgHaHa&mediaurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f11c5360a19960c9fe2d014f66c283b06%2ftenor.gif%3fitemid%3d17876456&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.11c5360a19960c9fe2d014f66c283b06%3frik%3d3dl4a%252bBUzNQYug%26pid%3dImgRaw%26r%3d0&exph=498&expw=498&q=gif+cute+no+background&simid=608054253218842645&FORM=IRPRST&ck=FEE147D37181A8650B0839AAD3666815&selectedIndex=3&itb=0&ajaxhist=0&ajaxserp=0";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});