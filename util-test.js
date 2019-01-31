const util=require('./util');
it('should test addition',()=>
{
   var res= util.add(32,11);
   if(res!==43)
   {
       throw new Error('expected 43 got '+res);
   }
})
it('should test square',()=>
{
   var res= util.square(11);
   if(res!==121)
   {
       throw new Error('expected 121 got '+res);
   }
})