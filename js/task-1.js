const categories = document.querySelectorAll('ul#categories li.item');

console.log(`Numbers of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  const countItems = category.querySelectorAll('ul > li').length;
  console.log(`Elements: ${countItems}`);
});
