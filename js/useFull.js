loadScript('js/a.js', () => {
   console.log('from useFull -> a', a)
   
   loadScript('js/b.js', () => {
      console.log('result summ a + b = ', a + b)
   })
})