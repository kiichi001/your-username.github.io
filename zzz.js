function calc() {
    document.querySelectorAll("#tbody tr").forEach(row => {
        let buy = parseFloat(row.querySelector(".buy").value) || 0;
        let sell = parseFloat(row.querySelector(".sell").value) || 0;

        // 利益
        let profit = sell - buy;
        row.querySelector(".profit").innerText = profit.toFixed(0);

        //仕入れ処理
        let fee = buy - (profit * 0.15);
        row.querySelector(".fee").innerText = fee.toFixed(0);
    });
}

document.getElementById("add").onclick = function() {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td><input type="text"></td>
        <td><input type="number" class="buy" oninput="calc()"></td>
        <td><input type="number" class="sell" oninput="calc()"></td>
        <td class="profit"></td>
        <td class="fee"></td>
        <td><input type="text"></td>
    `;
    document.getElementById("tbody").appendChild(tr);
};
