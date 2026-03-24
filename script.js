async function search(event){
 event.preventDefault()

 document.getElementById("result").innerHTML = "<h1>検索中...</h1>"
 const input= document.getElementById("input").value

 const formData = new FormData()
 formData.append("search",input)

 const res = await fetch("https://nandemopc.onrender.com",{
    method:"POST",
    body: formData
    
 })

 const data = await res.json()
 console.log(data)
 document.getElementById("result").innerHTML =
`
<h1>検索結果</h1>
<h2>${data.title}</h2>
<p>著者: ${data.author}</p>
<p>日付: ${data.date}</p>
<p>${data.content}</p>
`
}