const { it } = require("mocha");

describe('Store Test', function(){

  const apiEndpoint ='https://petstore.swagger.io/v2/store/';

    before(function(){

    });
  
    it('Get inventories status', function(){
     
      cy.log(String(apiEndpoint))
      cy
      .request({
        'method' : 'GET',
        'url'    : String(apiEndpoint +'inventory'),
      })
      .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('sold')
        expect(resp.body).to.have.property('string')
        expect(resp.body).to.have.property('available')
        expect(resp.body).to.have.property('not available')
        expect(resp.body).to.have.property('delivered')
        expect(resp.body).to.have.property('status')       
        this.current_inventories =resp.body
        cy.log(String(JSON.stringify(this.current_inventories)))

      })
    });
  
    it('Place order', function(){
      cy.log(String(apiEndpoint))
      cy.request({
        'method' : 'POST',
        'url'    : String(apiEndpoint +'order'),
        'body'   :{
              "id": 1,
              "petId": 12345,
              "quantity": 5,
              "shipDate": "2022-05-14T09:10:38.695Z",
              "status": "placed",
              "complete": true
        }
      })
      .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('id')
        expect(resp.body).to.have.property('petId',12345)
        expect(resp.body).to.have.property('quantity',5)
        expect(resp.body).to.have.property('shipDate')
        expect(resp.body).to.have.property('status','placed')
        expect(resp.body).to.have.property('complete',true)
        this.order = resp.body       
        cy.log(String(JSON.stringify(this.order)))

      })
    });

    it('Get order id=1 , after successfully order', function(){
      cy.log(String(apiEndpoint))
      var id_pet = '1'
      cy.request({
        'method' : 'GET',
        'url'    : String(apiEndpoint +'order/' + id_pet),
      })
      .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('id',1)
        expect(resp.body).to.have.property('petId',12345)
        expect(resp.body).to.have.property('quantity',5)
        expect(resp.body).to.have.property('shipDate')
        expect(resp.body).to.have.property('status','placed')
        expect(resp.body).to.have.property('complete',true) 
        this.order = resp.body       
        cy.log(String(JSON.stringify(this.order)))

      })
    });

    it('Delete order id=1 ', function(){
      cy.log(String(apiEndpoint))
      var id_pet = '1'
      cy.request({
        'method' : 'DELETE',
        'url'    : String(apiEndpoint +'order/' + id_pet),
      })
      .then((resp)=>{
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('code',200)
        expect(resp.body).to.have.property('type','unknown')
        expect(resp.body).to.have.property('message',1) 
        this.order = resp.body       
        cy.log(String(JSON.stringify(this.order)))

      })
    }); 
  });
  