const history = document.querySelectorAll(".user-history__account");

// "xxxによって 2018/10/24 15:53:49 に最終更新されました。"
const last_update_text = history[1].innerText.trim();
const last_update_date = last_update_text.split(" ")[1];
const last_update_time = last_update_text.split(" ")[2];
const last_update = last_update_date + " " + last_update_time;
const last_update_dt = new Date(last_update);

let one_year_ago = new Date();
one_year_ago.setFullYear(one_year_ago.getFullYear() - 1);

if (last_update_dt < one_year_ago) {
    const title = document.querySelector("#mainTitle");
    title.insertAdjacentHTML('afterend','<h4>最終更新日から1年以上経過しています！</h4>');
}