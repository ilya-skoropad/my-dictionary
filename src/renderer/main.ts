const userNameSpan = document.getElementById("user");
// @ts-expect-error
userNameSpan?.innerText = api.GetUserName;