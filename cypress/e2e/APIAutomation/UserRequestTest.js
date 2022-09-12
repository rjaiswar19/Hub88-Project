/// <reference types="cypress" />


const util = require('../../fixtures/Utility/utils')



describe('API automation for post request', () => {
    let accessTocken="Bearer 2e16acb4572169de1fd40615225fad878b13ddaef69fd1df0de8bf39b8f883c3"
    let randomtext=""
    let emailtext=""
    it('API automation ', () => {

        var email=util.getRandomEmail()

        // var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        // for(var i=0;i < 10;i++)
        //     randomtext+=pattern.charAt(Math.floor(Math.random()*pattern.length));
        //     emailtext=randomtext+'@gmail.com'

      cy.request({
          method:'POST',
          url:'https://gorest.co.in/public/v2/users',
          headers: {
           'Authorization' : accessTocken
          },
          body:{
            "name": "Apsara Ganaka",
            "email": email,
            "gender": "male",
            "status": "active"
        }

      }).then((res)=>{


          //cy.log(JSON.stringify(idvalue))
          expect(res.status).to.eq(201)
          expect(res.body).has.property('name','Apsara Ganaka')
          expect(res.body).has.property('gender','male')
          expect(res.body).has.property('status','active')
          expect(res.body).has.property('email',email)
         }).then((res)=>{
             const userid=res.body.id
             cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/users/'+userid,
                headers: {
                 'Authorization' : accessTocken
                },

            }).then((res)=>{
              //   let emaifromresponsebody=res.body.email.value
              //   console.log(emaifromresponsebody)
                expect(res.status).to.eq(200)
              //   expect(res.body).has.property('name','Apsara Ganaka')
              //   expect(res.body).has.property('gender','male')
              //   expect(res.body).has.property('status','active')
              //   expect(res.body).has.property('email',emailtext)

            }).then((res)=>{
                const userid=res.body.id
             cy.request({
                method:'DELETE',
                url:'https://gorest.co.in/public/v2/users/'+userid,
                headers: {
                 'Authorization' : accessTocken
                },
             }).then((res)=>{
                expect(res.status).to.eq(204)

             })

         })
 })

})
})