const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    data: {
      content : [
        {
          category_name : '👀',
          items : [
            {
              title : 'hex时钟',
              description : '如果把当前时间作为RGB颜色...',
              background_url : '/res/index/img_thumbnail_display_hex_clock.jpg',
              url : '/display/hex_clock'
            }
          ]
        }
      ]
    }
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
