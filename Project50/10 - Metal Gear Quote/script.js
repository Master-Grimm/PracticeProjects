const text = document.getElementById('quote')
const author = document.getElementById('author')

const getNewQuote = async () => {
  var url =
    'https://gist.githubusercontent.com/Master-Grimm/b1c8a8d1e77f605582b2abc0dba3d31c/raw/aacd80ebabc5f93dba6216e6ae4678e5664e9f17/quotestest'
  const res = await fetch(url)
  console.log(typeof res)
  const quotesArr = await res.json()

  const q = Math.floor(Math.random() * quotesArr.length)

  const quote = quotesArr[q].text

  const auth = quotesArr[q].author

  text.innerHTML = quote
  author.innerHTML = '--' + auth
}

getNewQuote()
