let req = ""
let query = ""
let results = []
let pw = "Clases2021"
let userName = 'amr66568'

drpStates.onclick = function(s) {
    if (typeof(s) == "object")
        return
    else {
        drpStates.value = s
    query = `SELECT name from customer WHERE state = '${s}'`
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amr66568&pass=" + pw + "&database=amr66568&query=" + query)
    if (req.status == 200) {  
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtaEmployee.value = "There are no clients from this state."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
              // message = message + results[i][1] + "\n"
               // txtaEmployee.value = results[i] + "\n"
               lgCustomer.addItem(results[i])
       }} } // end else
} 
  
  
  //Me esta diciendo undefinenf


