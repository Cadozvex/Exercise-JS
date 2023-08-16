// Function to capitalize the first letter
function capitalizeText(str) {
  const titleCase = str
    .toLowerCase() //chuyển thành viết thường hết
    .split(" ")//cắt
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);//viết hoa chữ đầu xong ghép lại
    })
    .join(" ");//nối lại

  return titleCase.trim(); //cắt khoảng cách trống 2 đầu
}

console.log(capitalizeText(" ah ah    đầkh   asfkha    ma    à"));
console.log(capitalizeText("      tên               tôi là          "));

