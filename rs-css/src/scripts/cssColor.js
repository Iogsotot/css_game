export default function cssColor(el) {
  console.log(el);
  let elObj = (document.getElementById(el) || el);
  console.log(elObj.value);
  console.log(elObj.value.length);
  if (elObj.value.length > 0) {
    console.log(elObj.value);
    elObj.style.color = "red";
  }
}