document.getElementById("delete").onclick = function () {
  const productId = document.getElementById("product-id").value;

  axios.delete(`/api/products/${productId}`).then(({ data }) => {
    currentProduct = data;
    processResult;
  });
};

function processResult() {
  window.alert("Product deleted!");
}
