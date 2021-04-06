drpNames.onshow = function() {
    imgPic.hidden = true
    drpNames.clear()
    for (i = 0; i < babyNames.length; i++)
        drpNames.addItem(babyNames[i])
}
drpNames.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } else {
        drpNames.value = s
        lblOutput.value = `Your favorite baby name is ${s}.`
       imgPic.hidden = false
    }
}