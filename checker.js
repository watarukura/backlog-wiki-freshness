const history = document.querySelectorAll(".user-history__account");

let last_update_text = "";
if (history[1] === undefined) {
    last_update_text = history[0].innerText.trim();
} else {
    last_update_text = history[1].innerText.trim();
}

// "xxxによって 2018/10/24 15:53:49 に最終更新されました。"
const last_update_date = last_update_text.split(" ")[1];
const last_update_time = last_update_text.split(" ")[2];
const last_update = last_update_date + " " + last_update_time;
const last_update_dt = new Date(last_update);

let one_year_ago = new Date();
one_year_ago.setFullYear(one_year_ago.getFullYear() - 1);
let two_year_ago = new Date();
two_year_ago.setFullYear(two_year_ago.getFullYear() - 2);
let three_year_ago = new Date();
three_year_ago.setFullYear(three_year_ago.getFullYear() - 3);

const title = document.querySelector("#mainTitle");
let year = 0;
if (last_update_dt < three_year_ago) {
    year = 3;
} else if (last_update_dt < two_year_ago) {
    year = 2;
} else if (last_update_dt < one_year_ago) {
    year = 1;
}

if (year > 0) {
    const message = `<h4><img src="https://assets.backlog.jp/backlog-mail/images/emoticons/warning.png" width="20" height="20" class="new_emoticon">最終更新日から${year}年以上経過しています！</h4>`;
    title.insertAdjacentHTML('afterend',message);
}