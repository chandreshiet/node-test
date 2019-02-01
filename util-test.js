const util=require('./util');
const expect=require('expect');
it('should test addition',()=>
{
   var res= util.add(32,11);
   expect(res).toBe(43);
})
it('should test square',()=>
{
   var res= util.square(11);
   expect(res).toBe(121)
})
it('should test SetName',()=>
{
   var user={}; 
   var res= util.setName(user,'Chandresh Shukla');
   expect(res.firstname).toBe('Chandresh');
   expect(res.lastname).toBe('Shukla');
});
it('should test Async Add',(done)=>{
   var sum=util.addASync(4,3,(sum)=>
   {
      expect(sum).toBe(7);
      done();
   });
}
)

it('should test Async Square methos',(done)=>
{
   util.squareASync(5,(square)=>
   {
      expect(square).toBe(25);
      done();
   })
})