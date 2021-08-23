import "../assets/styles/styles.scss";
import "./form.scss";
import { openModal } from "../assets/js/modal";

const form = document.querySelector("form");
const btnCancel = document.querySelector(".btn-secondary");
const errorElem = document.querySelector("#errors");
let articleId;
let errors = [];

const fillForm = (article) => {
  const author = document.querySelector('input[name="author"]');
  const img = document.querySelector('input[name="img"]');
  const category = document.querySelector('input[name="category"]');
  const title = document.querySelector('input[name="title"]');
  const content = document.querySelector("textarea");

  author.value = article.author || "";
  img.value = article.img || "";
  category.value = article.category || "";
  title.value = article.title || "";
  content.value = article.content || "";
};

const initForm = async () => {
  const params = new URL(location.href);
  articleId = params.searchParams.get("id");
  if (articleId) {
    const response = await fetch(
      `https://restapi.fr/api/articles/${articleId}`
    );
    if (response.status < 300) {
      const article = await response.json();
      fillForm(article);
    }
  }
};

initForm();

btnCancel.addEventListener("click", async () => {
  const result = await openModal(
    "If you leave this page, you will lose your article. Continue ?"
  );
  if (result) location.assign("/index.html");
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const entries = formData.entries();
  const obj = Object.fromEntries(entries);

  if (formIsValid(obj)) {
    try {
      const json = JSON.stringify(obj);
      let response;
      //fetch : https://restapi.fr/ <= offer by dyma as backend
      // use : https://restapi.fr/api += path we want
      if (articleId) {
        response = await fetch(`https://restapi.fr/api/articles/${articleId}`, {
          method: "PATCH",
          body: json,
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        response = await fetch("https://restapi.fr/api/articles", {
          method: "POST",
          body: json,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      if (response.status < 299) location.assign("/index.html");
    } catch (e) {
      console.error("e : ", e);
    }
  }
});

const formIsValid = (article) => {
  errors = [];
  if (
    !article.author ||
    !article.category ||
    !article.content ||
    !article.title
  ) {
    errors.push("You should fill in all fields");
  } else {
    errors = [];
  }
  if (errors.length) {
    let errorHTML = "";
    errors.forEach((e) => {
      errorHTML += `<li>${e}</li>`;
    });
    errorElem.innerHTML = errorHTML;
    return false;
  } else {
    errorElem.innerHTML = "";
    return true;
  }
};
