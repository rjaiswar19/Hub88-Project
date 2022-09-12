/// <reference types="cypress" />


const util = require('../../fixtures/Utility/utils')



describe('API automation for post request', () => {
    let accessTocken="Bearer 2e16acb4572169de1fd40615225fad878b13ddaef69fd1df0de8bf39b8f883c3"
    let randomtext=""
    let emailtext=""
    it('API automation ', () => {

        var email=util.getRandomEmail()


      cy.request({
          method:'POST',
          url:'https://gorest.co.in/public/v2/todos',
          headers: {
           'Authorization' : accessTocken
          },
          body:{
            "user_id": 55,
            "title": "Tum provident torqueo iure sortitus video cervus cedo.",
            "due_on": "2022-09-25T00:00:00.000+05:30",
            "status": "pending"
        }

      }).then((res)=>{


          //cy.log(JSON.stringify(idvalue))
          expect(res.status).to.eq(201)
          expect(res.body).has.property('user_id',55)
          expect(res.body).has.property('title','Tum provident torqueo iure sortitus video cervus cedo.')
          expect(res.body).has.property('status','pending')
         }).then((res)=>{
             const userid=res.body.id
             cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/todos/'+userid,
                headers: {
                 'Authorization' : accessTocken
                },

            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).has.property('user_id',55)
                expect(res.body).has.property('title','Tum provident torqueo iure sortitus video cervus cedo.')
                expect(res.body).has.property('status','pending')

            }).then((res)=>{
                const userid=res.body.id
             cy.request({
                method:'DELETE',
                url:'https://gorest.co.in/public/v2/todos/'+userid,
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