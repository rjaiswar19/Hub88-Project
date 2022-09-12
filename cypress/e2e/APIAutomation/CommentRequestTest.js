/// <reference types="cypress" />


const util = require('../../fixtures/Utility/utils')



describe('API automation for post request', () => {
    let accessTocken="Bearer 2e16acb4572169de1fd40615225fad878b13ddaef69fd1df0de8bf39b8f883c3"
    let randomtext=""
    let emailtext=""
    it('API automation ', () => {
      cy.request({
          method:'POST',
          url:'https://gorest.co.in/public/v2/comments',
          headers: {
           'Authorization' : accessTocken
          },
          body:{
            "post_id": 166,
            "name": "Chatur Patil",
            "email": "chatur_patil@senger.io",
            "body": "Laboriosam libero ea. Asperiores alias excepturi. Exercitationem ut vitae."
        }

      }).then((res)=>{
          expect(res.status).to.eq(201)
          expect(res.body).has.property('post_id',166)
          expect(res.body).has.property('name','Chatur Patil')
          expect(res.body).has.property('email','chatur_patil@senger.io')
          expect(res.body).has.property('body','Laboriosam libero ea. Asperiores alias excepturi. Exercitationem ut vitae.')
         }).then((res)=>{
             const userid=res.body.id
             cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/comments/'+userid,
                headers: {
                 'Authorization' : accessTocken
                },

            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).has.property('name','Chatur Patil')
                expect(res.body).has.property('email','chatur_patil@senger.io')
                expect(res.body).has.property('body','Laboriosam libero ea. Asperiores alias excepturi. Exercitationem ut vitae.')

            }).then((res)=>{
                const userid=res.body.id
             cy.request({
                method:'DELETE',
                url:'https://gorest.co.in/public/v2/comments/'+userid,
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