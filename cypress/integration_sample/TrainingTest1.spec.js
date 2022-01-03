// test
describe('Nama case: Verify', function(){

   // before(function(){
   //   // step 1: access URL
   // });
  // subcase nya
  // it('Sub Case 1: Search keyword ', function(){
  //   cy.visit('https://www.google.co.id/')
  //   cy.get('.gLFyf').type('MacBook').type('{enter}')
  //   cy.get('#rso').children('.g').find('.IsZvec').each(($el)=>{
  //     // 1) Pastikan search word MacBook ada di thumbnail result (case-insensitive)
  //     var text = ($el).text().toLowerCase();
  //     expect(text).to.have.string('macbook')
  //
  //     // 2) Pastikan search word MacBook di Bold
  //     // < insert code here >
  //     // var embText =($el).find('em').first().text().toLowerCase();
  //     // expect(embText).to.have.string('macbook')
  //     var embText =($el).find('em').first().text().toLowerCase();
  //     expect(embText).to.have.string('macbook')
  //
  //     //console.log($el[0]);
  //     //console.log(embText);
  //
  //     // 3) Pastikan Time stamp sama
  //     // Noted: ini di skip dulu karna ngedapetin time nya pake API
  //     // < insert code here >
  //   })
  // });

  it('case 2', function(){
    cy.visit('https://www.google.co.id/')
    cy.get('.gLFyf').type('MacBook').type('{enter}')
    cy.get('#search').find('.g').each(($el, index, $list) => {
        //expect($el, index, $list).to.contains(/macbook/i)
        console.log($el[0])
        })
    cy.get('#search').find('em').each(($el, index, $list) => {
        //expect($el, index, $list).to.contains(/macbook/i)
        console.log($el[0])
        })
  });

  // cy.get('._3VkVO').then(($el) =>{=
  //   return ($el[0])
  // }).children('._8JShU').should('have.attr','alt').then(alttext =>{
  //    expect(alttext).to.have.string('MacBook');
  // });
  // cy.get('._3VkVO').then(($el) =>{
  //   return ($el[0])
  // }).find('._8JShU').children().then(($el)=>{
  //   const txt = $el.text();
  //   expect(txt).to.have.string("MacBook")
  // })


  // cy.get('#rso').children('.g').then(($el)=>{
  //
  //     // let list =[]
  //
  //     var a = $el.get('.IsZvec')
  //     console.log(a)
      // for(let i =0 ; i< 10 ; i++){
      //     list.push(a[i]);
      // }
      // var b = a(0).text();
      // expect(b).to.have.string('MacBook');
      // expect(a[1]).to.have.string('MacBook');

  // })
});
