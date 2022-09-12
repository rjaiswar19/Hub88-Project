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
          url:'https://gorest.co.in/public/v2/posts',
          headers: {
           'Authorization' : accessTocken
          },
          body:{
            "user_id": 33,
            "title": "Fuga stillicidium curis carbo coerceo somniculosus odio.",
            "body": "Et cunctatio desidero. Apto vix alo. Quod tubineus audentia. Perspiciatis aspicio amita. Quaerat alienus solus. Curvus alveus aperio. Aedificium debilito inflammatio. Sequi tollo pauper. Caelestis cogito agnitio. Talis civitas culpo. Tenuis supellex repellendus. Apparatus conatus cotidie. Eos expedita comprehendo. Arto atqui hic. Conqueror exercitationem quibusdam. Quam adeptio adhuc. Amiculum congregatio illo. Laborum varius ustilo. Cornu cunctatio carus. Conor absorbeo antea."
        }

      }).then((res)=>{
          expect(res.status).to.eq(201)
          expect(res.body).has.property('title','Fuga stillicidium curis carbo coerceo somniculosus odio.')
          expect(res.body).has.property('body','Et cunctatio desidero. Apto vix alo. Quod tubineus audentia. Perspiciatis aspicio amita. Quaerat alienus solus. Curvus alveus aperio. Aedificium debilito inflammatio. Sequi tollo pauper. Caelestis cogito agnitio. Talis civitas culpo. Tenuis supellex repellendus. Apparatus conatus cotidie. Eos expedita comprehendo. Arto atqui hic. Conqueror exercitationem quibusdam. Quam adeptio adhuc. Amiculum congregatio illo. Laborum varius ustilo. Cornu cunctatio carus. Conor absorbeo antea.')
         }).then((res)=>{
             const userid=res.body.id
             cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/posts/'+userid,
                headers: {
                 'Authorization' : accessTocken
                },

            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).has.property('title','Fuga stillicidium curis carbo coerceo somniculosus odio.')
                expect(res.body).has.property('body','Et cunctatio desidero. Apto vix alo. Quod tubineus audentia. Perspiciatis aspicio amita. Quaerat alienus solus. Curvus alveus aperio. Aedificium debilito inflammatio. Sequi tollo pauper. Caelestis cogito agnitio. Talis civitas culpo. Tenuis supellex repellendus. Apparatus conatus cotidie. Eos expedita comprehendo. Arto atqui hic. Conqueror exercitationem quibusdam. Quam adeptio adhuc. Amiculum congregatio illo. Laborum varius ustilo. Cornu cunctatio carus. Conor absorbeo antea.')
            }).then((res)=>{
                const userid=res.body.id
             cy.request({
                method:'DELETE',
                url:'https://gorest.co.in/public/v2/posts/'+userid,
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