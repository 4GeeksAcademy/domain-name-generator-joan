window.onload = function() {
  const content = document.getElementById("content");

  content.innerHTML = "Hola";

  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  pronouns.map(pronoun => {
    adjectives.map(adjective => {
      nouns.map(noun => {
        console.log(`{pronoun}{adjective}{noun}.com`);
      });
    });
  });
};
