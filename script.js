const postList = document.getElementById('post-list')


fetch('http://localhost:4000', {
  method: 'POST',
  headers: { "Content-Type": "application/json" },

  body: JSON.stringify({

    query: `
    query{
      posts{
        title
      }
    }`
  })
}).then(response => response.json())
  .then(data => {
    // console.log(data)
    data.data.posts.forEach(post => {
      const listItem = document.createElement('li')
      listItem.innerText = post.title + ' by ' + post.author
      postList.append(listItem)
    })
  })