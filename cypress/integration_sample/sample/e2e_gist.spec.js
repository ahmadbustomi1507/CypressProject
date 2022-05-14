describe('', function(){

  // var nama_2 = 'alvia';
  //var nama;
  before(function(){
    var nama;
  });

  it('1 Create a public gist', function(){
    this.nama ='tomi'
    console.log(this.nama)
    cy.tomi()
    this.nama ='ahmad bustomi'
  });

  it('2 Edit an existing gist', function(){
    console.log(this.nama)
    //console.log(nama_2)
  });

  it.only('3) Delete an existing gist', function(){
      cy.login('tomi@gmail.com', '12345').then(($el)=>{
        console.log(($el))

      })
  });

/*
  it('4) See my list of gist', function(){

  });
  */

});
