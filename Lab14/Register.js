app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
 <body>
 <form action="" method="POST">
 <input type="text" name="username" size="40" placeholder="enter username" ><br />
 <input type="password" name="password" size="40" placeholder="enter password"><br />
 <input type="submit" value="Submit" id="submit">
 </form>
 </body>
    `;
    response.send(str);
 });
  
 app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body);
    the_username = request.body.username;
    if (typeof users_reg_data[the_username] != 'undefined') {
        if (users_reg_data[the_username].password == request.body.password) {
            response.send(username + ' logged in.');
        }
        else {
            response.redirect('/login');
        }
    }
 });
 