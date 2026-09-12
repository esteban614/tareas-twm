const products = [
  { name: "Paleta Lebrun", stock: 3 },
  { name: "Pelotas (x6)", stock: 0 },
  { name: "Goma Tenergy", stock: 5 },
];

function ProductCard(producto)
{
    if (checkbox.checked && producto.stock > 0)
        return `<div class='card'><h3>${producto.name}</h3><p>${producto.stock}</p></div><br>`;
    else if (!checkbox.checked)
        return `<div class='card'><h3>${producto.name}</h3><p>${producto.stock}</p></div><br>`;
    else
        return "";
};

function renderCatalog(list)
{
    const cards = products.map((product) => ProductCard(product));
    const html = cards.join("")
    console.log(html);
    const catalog = document.getElementById("catalog");
    catalog.innerHTML += html;
};

function handleCheckbox()
{
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "\n";
    renderCatalog();
}

const checkbox = document.getElementById("stockOnly");
checkbox.addEventListener("click", handleCheckbox);

// oneshot when page loads
renderCatalog();
