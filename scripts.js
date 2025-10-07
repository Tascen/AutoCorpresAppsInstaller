// Фильтр на записи в копибайз
[].slice.call(document.querySelectorAll("tbody tr > td:nth-child(1)")).map((item)=>item.innerText.trim()).filter((item, i, self)=>self.indexOf(item) === i)



// Фильтр по записям в АРСВ
[].slice.call(document.querySelectorAll("tbody tr.haserrors")).filter((item)=>fromCopyBase.includes(item.children[0].innerHTML.trim())).map((item)=>item.classList.add("is-my_work"))
(()=>{
    const stlye = document.createElement("style")
    style.innerHTML = `
section#xslt table.partner-table tr.haserrors td:nth-last-child(2) {display: none}
tr.haserrors.is-my_work {display: none}
`

    document.body.appendChild(style)
})()
