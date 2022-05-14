describe('Sample Test', function(){

  // cy.request(url)
  // cy.request(url, body)
  // cy.request(method, url)
  // cy.request(method, url, body)
  // cy.request(options)
  const apiEndpoint ='https://petstore.swagger.io/v2/user/' ;

    before(function(){
      this.user_1 = 'user_1'
      this.user_2 = 'user_2'
      this.user_3 = 'user_3'
      this.user_4 = 'user_4'
      this.user_5 = 'user_5'
    });
  
    it('Create single User', function(){
     
      cy.log( 'base :' +apiEndpoint)
      var payload = {
        "id": 0,
        "username": "user_1",
        "firstName": "ahmad",
        "lastName": "bustomi",
        "email": "user_1@gmail.com",
        "password": "12345",
        "phone": "081234512345",
        "userStatus": 0
      }
      cy.request('POST',apiEndpoint,payload).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.not.empty       
      })

    });
  
    it('Create multiple user with array', function(){
      cy.log( 'base :' +apiEndpoint)
      cy.request('POST', apiEndpoint + 'createWithArray' , 
      [{
        "id": 0,
        "username": "user_2",
        "firstName": "ahmad",
        "lastName": "bustomi",
        "email": "user_2@gmail.com",
        "password": "12345",
        "phone": "081234512345",
        "userStatus": 0
      },{
        "id": 0,
        "username": "user_3",
        "firstName": "ahmad",
        "lastName": "bustomi",
        "email": "user_3@gmail.com",
        "password": "12345",
        "phone": "081238461732",
        "userStatus": 0
      }]).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.not.empty        
      })

    });

    it('Create multiple user with list', function(){
      cy.log( 'base :' +apiEndpoint)
      cy.request('POST', apiEndpoint + 'createWithList' , 
      [
        {
          "id": 0,
          "username": "user_4",
          "firstName": "ahmad",
          "lastName": "bustomi",
          "email": "user_4@gmail.com",
          "password": "12345",
          "phone": "081234512345",
          "userStatus": 0
        },{
          "id": 0,
          "username": "user_5",
          "firstName": "ahmad",
          "lastName": "bustomi",
          "email": "user_5@gmail.com",
          "password": "12345",
          "phone": "081238461732",
          "userStatus": 0
        } 
      ]
      ).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.not.empty        
      })

    });

    it('Get user info details', function(){
      cy.log( 'base :' + apiEndpoint)
      cy.request('GET', apiEndpoint + this.user_1).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('username',this.user_1)
        expect(resp.body).to.have.property('firstName','ahmad')
        expect(resp.body).to.have.property('lastName','bustomi')
        expect(resp.body).to.have.property('email','user_1@gmail.com')
        expect(resp.body).to.have.property('password','12345')
        expect(resp.body).to.have.property('phone','081234512345')       
      })
      cy.request('GET', apiEndpoint + this.user_2).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('username',this.user_2)
        expect(resp.body).to.have.property('firstName','ahmad')
        expect(resp.body).to.have.property('lastName','bustomi')
        expect(resp.body).to.have.property('email','user_2@gmail.com')
        expect(resp.body).to.have.property('password','12345')
        expect(resp.body).to.have.property('phone','081234512345')       
      })
      cy.request('GET', apiEndpoint + this.user_4).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('username',this.user_4)
        expect(resp.body).to.have.property('firstName','ahmad')
        expect(resp.body).to.have.property('lastName','bustomi')
        expect(resp.body).to.have.property('email','user_2@gmail.com')
        expect(resp.body).to.have.property('password','12345')
        expect(resp.body).to.have.property('phone','081234512345')       
      })

    });

    it('Login user', function(){
      cy.log( 'base :' + apiEndpoint)
      var login = String(apiEndpoint + 'login')
      cy.request({
        method: 'GET',
        url   : login,
        qs: {
          'username': this.user_1,
          'password': '12345'},
      }).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.have.string('logged in user session:')
       
      })

      cy.request({
        method: 'GET',
        url   : login,
        qs: {
          'username': this.user_2,
          'password': '12345'},
      }).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.have.string('logged in user session:')
       
      })

      cy.request({
        method: 'GET',
        url   : login,
        qs: {
          'username': this.user_4,
          'password': '12345'},
      }).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.have.string('logged in user session:')
       
      })

    });
  
  
    it('Logout user', function(){
      var logout = String(apiEndpoint + 'logout')
      cy.request({
        method: 'GET',
        url   : logout,
      }).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.have.string('ok')
       
      })
    });

    it('Update user',function(){
      cy.request('GET', apiEndpoint + this.user_1).then((resp)=>{
        this.id_user_1 = resp.body.id
      });
      cy.log(this.id_user_1)
      var update = String(apiEndpoint + this.user_1)
      cy.request({
        method: 'PUT',
        url   : update,
        body  : {
          "id"      : this.id_user_1,
          "username": "user_1",
          "firstName": "bukan ahmad",
          "lastName": "bukan bustomi",
          "email": "bukan_user_1@gmail.com",
          "password": "12345",
          "phone": "081234512345",
          "userStatus": 0
        },
      }).then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.string(this.id_user_1)     
      });

    });

    it('Delete user',function(){
      cy.request({
        method: 'DELETE',
        url   : String(apiEndpoint + this.user_1),
        })
        .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.string(this.user_1)     
      });

      cy.request({
        method: 'DELETE',
        url   : String(apiEndpoint + this.user_1),
        })
        .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.string(this.user_1)     
      });

      cy.request({
        method: 'DELETE',
        url   : String(apiEndpoint + this.user_2),
        })
        .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.string(this.user_2)     
      });

      cy.request({
        method: 'DELETE',
        url   : String(apiEndpoint + this.user_3),
        })
        .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.string(this.user_3)     
      });

      cy.request({
        method: 'DELETE',
        url   : String(apiEndpoint + this.user_4),
        })
        .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.string(this.user_4)     
      });

      cy.request({
        method: 'DELETE',
        url   : String(apiEndpoint + this.user_5),
        })
        .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body.message).to.be.string(this.user_5)     
      });



    });


  });
  