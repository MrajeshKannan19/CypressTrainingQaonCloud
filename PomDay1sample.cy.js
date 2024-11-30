import CreateAccountPage from "../../PomConcept/CreateAccountPage"
require('cypress-xpath');

describe('PageObjectmodel',()=>{

    it('POM concept -Day Nov26',()=>{

        const ln= new CreateAccountPage
        ln.visit()
     //   ln.fullname('rajesh kannan ')
      //  ln.rediffemail('kannanrajesh90')
       //ln.password('Rajesh1234')
       // ln.RetypePassword('Rajesh1234')
       // ln.AlternateEmail('qarajeshkannan@gmail.com')
        //ln.MobileNumber('7397590044')
  
      /*  ln.Day('19')
        ln.Month('03')
        ln.Year('1998')
        ln.Gender() */
        ln.city('Chennai')
        ln.verifyBuzz()




    })
})