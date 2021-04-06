let babyNames = []
btnNext.onclick = function() {
    if (babyNames.length == 5)
        lblNames.value = 'Pick 5 of your favorite names.'
    else
        babyNames.push(selBabyNames.text)
}
btnFavBaby.onclick = function() {
    ChangeForm(FavBabyName)
}